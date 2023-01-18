import 'layer_data_transformer.dart'

/// Implementation of the LayerDataTransformer.
/// For example: Extend this abstract class to any of the entity classes<F> and provide their domain counterpart<T> as well.
/// override transform() and/or restore() and to convert them
///
/// <pre>
///    class PersonEntity(var name: String):
///          BaseLayerDataTransformer<PersonEntity, Person>() {
///
///      override fun transform(): Person {
///          return Person(name)
///       }
///
///      override fun restore(data: Person): PersonEntity {
///          return PersonEntity(data.name)
///      }
///
///  }
/// </pre>
/// transform() Usage : (Entity class must override transform() function)
/// var person:Person = personEntity.transform()
///
/// restore() Usage : (Entity class must override restore() function)
/// var personEntity:PersonEntity = PersonEntity().restore(person)
///
export abstract class BaseLayerDataTransformer<F, T> extends LayerDataTransformer<F, T> {
  restore(data: T): F {
    throw Error('Function not implemented.')
  }

  transform(): T {
    throw Error('Function not implemented.')
  }
}
