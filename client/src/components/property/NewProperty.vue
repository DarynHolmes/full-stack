<template>
  <div class="new-property">
    <h2 class="sub-header">New Property</h2>
    <form @submit.prevent="submit" class="new-property-form">
      <div class="form-group property-short-description" :class="{ 'form-group--error': $v.property.shortDescription.$error }">
        <label class="form__label">Short Description</label>
        <textarea rows="6" class="form__input" v-model.trim="$v.property.shortDescription.$model"/>
        <div class="error">Short Description is required</div>
      </div>

      <div class="form-group property-long-description" :class="{ 'form-group--error': $v.property.longDescription.$error }">
        <label class="form__label">Long Description</label>
        <textarea rows="6" class="form__input" v-model.trim="$v.property.longDescription.$model"/>
        <div class="error">Long Description is required</div>
      </div>

      <div class="form-group property-price" :class="{ 'form-group--error': $v.property.price.$error }">
        <label class="form__label">Price</label>
        <input type="number" class="form__input" min="0" v-model.trim="$v.property.price.$model"/>
        <div class="error">Price is required</div>
      </div>

      <div class="form-group property-currency" :class="{ 'form-group--error': $v.property.currency.$error }">
        <label class="form__label">Currency</label>
        <select-list :items="currencies" class="form__input" v-model.trim="$v.property.currency.$model"></select-list>
        <div class="error">Currency is required</div>
      </div>

      <div class="form-group property-type" :class="{ 'form-group--error': $v.property.propertyType.$error }">
        <label class="form__label">Type</label>
        <select-list :items="propertyTypes" class="form__input" v-model.trim="$v.property.propertyType.$model"></select-list>
        <div class="error">Type is required</div>
      </div>

      <button class="btn-standard action shadow" @click.prevent="submit">Add Property</button>
    </form>
  </div>
</template>

<script>
import uniqueid from 'uniqueid'
import { required } from 'vuelidate/lib/validators'
import GET_PROPERTIES_QUERY from '@/graphQL/queries/getProperties'
import GET_ENUM_VALUES_QUERY from '@/graphQL/queries/getEnumValues'
import NEW_PROPERTY_MUTATION from '@/graphQL/queries/newProperty'
import SelectList from '@/components/common/SelectList.vue'

// used to give temporary IDs to properties
// that have not yet been saved to the backend
const tempId = uniqueid('temp-')

const mapToEnumNames = ({ __type: { enumValues } }) =>
  enumValues.map(enumItem => enumItem.name)

// Constructor function to create an 'empty' Property
const Property = () => ({
  shortDescription: '',
  longDescription: null,
  currency: null,
  price: null,
  propertyType: null
})

export default {
  name: 'new-property',
  components: {
    SelectList
  },
  data: function() {
    return {
      property: new Property()
    }
  },
  // vuelidate validations
  validations: {
    property: {
      shortDescription: {
        required
      },
      longDescription: {
        required
      },
      price: {
        required
      },
      currency: {
        required
      },
      propertyType: {
        required
      }
    }
  },
  apollo: {
    currencies: {
      query: GET_ENUM_VALUES_QUERY,
      variables: { enumName: 'Currency' },
      update: mapToEnumNames
    },
    propertyTypes: {
      query: GET_ENUM_VALUES_QUERY,
      variables: { enumName: 'PropertyType' },
      update: mapToEnumNames
    }
  },
  methods: {
    async submit(e) {
      try {
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        const property = this.property

        await this.$apollo.mutate({
          mutation: NEW_PROPERTY_MUTATION,
          // Parameters
          variables: property,
          // eslint-disable-next-line
          update(store, { data: { addProperty } }) {
            // The new property has been created
            // This code updates the cache for the GET_PROPERTIES_QUERY
            // This will result in the UI being updated in the side bar
            // Read the data from the cache for the GET_PROPERTIES_QUERY query
            const data = store.readQuery({ query: GET_PROPERTIES_QUERY })
            // Add our property from the mutation to the end
            data.properties.unshift(addProperty)
            // Write the data back to the cache
            store.writeQuery({ query: GET_PROPERTIES_QUERY, data })
          },
          // Optimistic UI
          // This is a temporary result to be used while waiting for the request to complete
          // The temporary gets an ID which has a 'temp-' prefix, used to indicate it is temporary
          optimisticResponse: {
            __typename: 'Mutation',
            addProperty: {
              ...{
                __typename: 'Property',
                id: tempId()
              },
              ...property
            }
          }
        })
        this.$v.$reset()
        this.property = new Property() // reset fields
      } catch (err) {
        console.log('Error: ', err)
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  color: #333;
  transition: color 1.3s linear;
}

input,
textarea,
select {
  border: 1px solid #aaa;
}

.form-group {
  margin-top: 5px;
}

.form-group--error > textarea,
.form-group--error > input,
.form-group--error select {
  border-color: #900;
}

.form-group > label {
  color: #333;
  transition: color 0.3s linear;
  margin-bottom: 5px;
}

.error {
  color: #900;
  margin-top: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;
}

.form-group--error .error {
  visibility: visible;
  opacity: 1;
}

.new-property {
  padding: 50px;
}

.new-property-form {
  display: grid;
  justify-content: center;
  grid-column-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    'price currency type'
    'short-description short-description short-description'
    'long-description long-description long-description'
    'action action action';
}

.property-short-description {
  grid-area: short-description;
}

.property-long-description {
  grid-area: long-description;
}

.property-price {
  padding-top: 3px;
  grid-area: price;
}

.property-currency {
  grid-area: currency;
}

.property-type {
  grid-area: type;
}

.action {
  grid-area: action;
  justify-self: end;
}
</style>
