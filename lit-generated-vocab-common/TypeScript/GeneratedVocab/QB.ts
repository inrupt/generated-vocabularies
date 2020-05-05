/*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

import { LitVocabTerm, getLocalStore } from "@inrupt/lit-vocab-term";
import dataFactory from "@rdfjs/data-model";
const namedNode = dataFactory.namedNode;

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-common], version: [0.3.4]
  at 'Tuesday, May 5, 2020 4:12 PM'.

  Vocabulary built from vocab list file: [lit-rdf-vocab/Common/Vocab-List-LIT-Common.yml].
 */

function _NS(localName: string) { 
  return (namedNode("http://purl.org/linked-data/cube#" + localName));
}

const QB = {
  PREFIX: "qb",
  NAMESPACE: "http://purl.org/linked-data/cube#",
  PREFIX_AND_NAMESPACE: { "qb": "http://purl.org/linked-data/cube#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * Represents a collection of observations, possibly organized into various slices, conforming to some common dimensional structure.
   */
  DataSet: new LitVocabTerm(
    _NS("DataSet"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Data set`, "en")
    .addComment(`Represents a collection of observations, possibly organized into various slices, conforming to some common dimensional structure.`, "en"),

  /**
   * Abstract superclass for everything that can have attributes and dimensions
   */
  Attachable: new LitVocabTerm(
    _NS("Attachable"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Attachable (abstract)`, "en")
    .addComment(`Abstract superclass for everything that can have attributes and dimensions`, "en"),

  /**
   * A single observation in the cube, may have one or more associated measured values
   */
  Observation: new LitVocabTerm(
    _NS("Observation"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Observation`, "en")
    .addComment(`A single observation in the cube, may have one or more associated measured values`, "en"),

  /**
   * A, possibly arbitrary, group of observations.
   */
  ObservationGroup: new LitVocabTerm(
    _NS("ObservationGroup"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Observation Group`, "en")
    .addComment(`A, possibly arbitrary, group of observations.`, "en"),

  /**
   * Denotes a subset of a DataSet defined by fixing a subset of the dimensional values, component properties on the Slice
   */
  Slice: new LitVocabTerm(
    _NS("Slice"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Slice`, "en")
    .addComment(`Denotes a subset of a DataSet defined by fixing a subset of the dimensional values, component properties on the Slice`, "en"),

  /**
   * Abstract super-property of all properties representing dimensions, attributes or measures
   */
  ComponentProperty: new LitVocabTerm(
    _NS("ComponentProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Component property (abstract)`, "en")
    .addComment(`Abstract super-property of all properties representing dimensions, attributes or measures`, "en"),

  /**
   * The class of components which represent the dimensions of the cube
   */
  DimensionProperty: new LitVocabTerm(
    _NS("DimensionProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Dimension property`, "en")
    .addComment(`The class of components which represent the dimensions of the cube`, "en"),

  /**
   * Superclass of all coded ComponentProperties
   */
  CodedProperty: new LitVocabTerm(
    _NS("CodedProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Coded property`, "en")
    .addComment(`Superclass of all coded ComponentProperties`, "en"),

  /**
   * The class of components which represent the measured value of the phenomenon being observed
   */
  MeasureProperty: new LitVocabTerm(
    _NS("MeasureProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Measure property`, "en")
    .addComment(`The class of components which represent the measured value of the phenomenon being observed`, "en"),

  /**
   * The class of components which represent attributes of observations in the cube, e.g. unit of measurement
   */
  AttributeProperty: new LitVocabTerm(
    _NS("AttributeProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Attribute property`, "en")
    .addComment(`The class of components which represent attributes of observations in the cube, e.g. unit of measurement`, "en"),

  /**
   * Defines the structure of a DataSet or slice
   */
  DataStructureDefinition: new LitVocabTerm(
    _NS("DataStructureDefinition"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Data structure definition`, "en")
    .addComment(`Defines the structure of a DataSet or slice`, "en"),

  /**
   * Abstract class of things which reference one or more ComponentProperties
   */
  ComponentSet: new LitVocabTerm(
    _NS("ComponentSet"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Component set`, "en")
    .addComment(`Abstract class of things which reference one or more ComponentProperties`, "en"),

  /**
   * Used to define properties of a component (attribute, dimension etc) which are specific to its usage in a DSD.
   */
  ComponentSpecification: new LitVocabTerm(
    _NS("ComponentSpecification"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Component specification`, "en")
    .addComment(`Used to define properties of a component (attribute, dimension etc) which are specific to its usage in a DSD.`, "en"),

  /**
   * Denotes a subset of the component properties of a DataSet which are fixed in the corresponding slices
   */
  SliceKey: new LitVocabTerm(
    _NS("SliceKey"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Slice key`, "en")
    .addComment(`Denotes a subset of the component properties of a DataSet which are fixed in the corresponding slices`, "en"),

  /**
   * Represents a generalized hierarchy of concepts which can be used for coding. The hierarchy is defined by one or more roots together with a property which relates concepts in the hierarchy to thier child concept .  The same concepts may be members of multiple hierarchies provided that different qb:parentChildProperty values are used for each hierarchy.
   */
  HierarchicalCodeList: new LitVocabTerm(
    _NS("HierarchicalCodeList"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Hierarchical Code List`, "en")
    .addComment(`Represents a generalized hierarchy of concepts which can be used for coding. The hierarchy is defined by one or more roots together with a property which relates concepts in the hierarchy to thier child concept .  The same concepts may be members of multiple hierarchies provided that different qb:parentChildProperty values are used for each hierarchy.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * indicates the data set of which this observation is a part
   */
  dataSet: new LitVocabTerm(
    _NS("dataSet"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`data set`, "en")
    .addComment(`indicates the data set of which this observation is a part`, "en"),

  /**
   * indicates a observation contained within this slice of the data set
   */
  observation: new LitVocabTerm(
    _NS("observation"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`observation`, "en")
    .addComment(`indicates a observation contained within this slice of the data set`, "en"),

  /**
   * Indicates a group of observations. The domain of this property is left open so that a group may be attached to different resources and need not be restricted to a single DataSet
   */
  observationGroup: new LitVocabTerm(
    _NS("observationGroup"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`observation group`, "en")
    .addComment(`Indicates a group of observations. The domain of this property is left open so that a group may be attached to different resources and need not be restricted to a single DataSet`, "en"),

  /**
   * Indicates a subset of a DataSet defined by fixing a subset of the dimensional values
   */
  slice: new LitVocabTerm(
    _NS("slice"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`slice`, "en")
    .addComment(`Indicates a subset of a DataSet defined by fixing a subset of the dimensional values`, "en"),

  /**
   * Generic measure dimension, the value of this dimension indicates which measure (from the set of measures in the DSD) is being given by the obsValue (or other primary measure)
   */
  measureType: new LitVocabTerm(
    _NS("measureType"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`measure type`, "en")
    .addComment(`Generic measure dimension, the value of this dimension indicates which measure (from the set of measures in the DSD) is being given by the obsValue (or other primary measure)`, "en"),

  /**
   * indicates the structure to which this data set conforms
   */
  structure: new LitVocabTerm(
    _NS("structure"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`structure`, "en")
    .addComment(`indicates the structure to which this data set conforms`, "en"),

  /**
   * indicates a component specification which is included in the structure of the dataset
   */
  component: new LitVocabTerm(
    _NS("component"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`component specification`, "en")
    .addComment(`indicates a component specification which is included in the structure of the dataset`, "en"),

  /**
   * indicates a ComponentProperty (i.e. attribute/dimension) expected on a DataSet, or a dimension fixed in a SliceKey
   */
  componentProperty: new LitVocabTerm(
    _NS("componentProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`component`, "en")
    .addComment(`indicates a ComponentProperty (i.e. attribute/dimension) expected on a DataSet, or a dimension fixed in a SliceKey`, "en"),

  /**
   * indicates a priority order for the components of sets with this structure, used to guide presentations - lower order numbers come before higher numbers, un-numbered components come last
   */
  order: new LitVocabTerm(
    _NS("order"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`order`, "en")
    .addComment(`indicates a priority order for the components of sets with this structure, used to guide presentations - lower order numbers come before higher numbers, un-numbered components come last`, "en"),

  /**
   * Indicates whether a component property is required (true) or optional (false) in the context of a DSD. Only applicable
    to components correspond to an attribute. Defaults to false (optional).
   */
  componentRequired: new LitVocabTerm(
    _NS("componentRequired"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`component required`, "en")
    .addComment(`Indicates whether a component property is required (true) or optional (false) in the context of a DSD. Only applicable
    to components correspond to an attribute. Defaults to false (optional).`, "en"),

  /**
   * Indicates the level at which the component property should be attached, this might an qb:DataSet, qb:Slice or qb:Observation, or a qb:MeasureProperty.
   */
  componentAttachment: new LitVocabTerm(
    _NS("componentAttachment"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`component attachment`, "en")
    .addComment(`Indicates the level at which the component property should be attached, this might an qb:DataSet, qb:Slice or qb:Observation, or a qb:MeasureProperty.`, "en"),

  /**
   * An alternative to qb:componentProperty which makes explicit that the component is a dimension
   */
  dimension: new LitVocabTerm(
    _NS("dimension"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`dimension`, "en")
    .addComment(`An alternative to qb:componentProperty which makes explicit that the component is a dimension`, "en"),

  /**
   * An alternative to qb:componentProperty which makes explicit that the component is a measure
   */
  measure: new LitVocabTerm(
    _NS("measure"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`measure`, "en")
    .addComment(`An alternative to qb:componentProperty which makes explicit that the component is a measure`, "en"),

  /**
   * An alternative to qb:componentProperty which makes explicit that the component is a attribute
   */
  attribute: new LitVocabTerm(
    _NS("attribute"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`attribute`, "en")
    .addComment(`An alternative to qb:componentProperty which makes explicit that the component is a attribute`, "en"),

  /**
   * An alternative to qb:componentProperty which makes explicit that the component is a measure dimension
   */
  measureDimension: new LitVocabTerm(
    _NS("measureDimension"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`measure dimension`, "en")
    .addComment(`An alternative to qb:componentProperty which makes explicit that the component is a measure dimension`, "en"),

  /**
   * indicates the sub-key corresponding to this slice
   */
  sliceStructure: new LitVocabTerm(
    _NS("sliceStructure"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`slice structure`, "en")
    .addComment(`indicates the sub-key corresponding to this slice`, "en"),

  /**
   * indicates a slice key which is used for slices in this dataset
   */
  sliceKey: new LitVocabTerm(
    _NS("sliceKey"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`slice key`, "en")
    .addComment(`indicates a slice key which is used for slices in this dataset`, "en"),

  /**
   * gives the concept which is being measured or indicated by a ComponentProperty
   */
  concept: new LitVocabTerm(
    _NS("concept"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`concept`, "en")
    .addComment(`gives the concept which is being measured or indicated by a ComponentProperty`, "en"),

  /**
   * gives the code list associated with a CodedProperty
   */
  codeList: new LitVocabTerm(
    _NS("codeList"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`code list`, "en")
    .addComment(`gives the code list associated with a CodedProperty`, "en"),

  /**
   * Specifies a root of the hierarchy. A hierarchy may have multiple roots but must have at least one.
   */
  hierarchyRoot: new LitVocabTerm(
    _NS("hierarchyRoot"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addComment(`Specifies a root of the hierarchy. A hierarchy may have multiple roots but must have at least one.`, "en"),

  /**
   * Specifies a property which relates a parent concept in the hierarchy to a child concept.
   */
  parentChildProperty: new LitVocabTerm(
    _NS("parentChildProperty"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`parent-child property`, "en")
    .addComment(`Specifies a property which relates a parent concept in the hierarchy to a child concept.`, "en"),

};

export { QB };
