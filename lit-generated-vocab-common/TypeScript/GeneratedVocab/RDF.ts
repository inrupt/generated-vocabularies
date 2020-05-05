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
  return (namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#" + localName));
}

const RDF = {
  PREFIX: "rdf",
  NAMESPACE: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  PREFIX_AND_NAMESPACE: { "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * The datatype of RDF literals storing fragments of HTML content
   */
  HTML: new LitVocabTerm(
    _NS("HTML"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`HTML`)
    .addCommentNoLanguage(`The datatype of RDF literals storing fragments of HTML content`),

  /**
   * The datatype of language-tagged string values
   */
  langString: new LitVocabTerm(
    _NS("langString"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`langString`)
    .addCommentNoLanguage(`The datatype of language-tagged string values`),

  /**
   * The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2
   */
  PlainLiteral: new LitVocabTerm(
    _NS("PlainLiteral"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`PlainLiteral`)
    .addCommentNoLanguage(`The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2`),

  /**
   * The class of RDF properties.
   */
  Property: new LitVocabTerm(
    _NS("Property"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Property`)
    .addCommentNoLanguage(`The class of RDF properties.`),

  /**
   * The class of RDF statements.
   */
  Statement: new LitVocabTerm(
    _NS("Statement"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Statement`)
    .addCommentNoLanguage(`The class of RDF statements.`),

  /**
   * The class of unordered containers.
   */
  Bag: new LitVocabTerm(
    _NS("Bag"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Bag`)
    .addCommentNoLanguage(`The class of unordered containers.`),

  /**
   * The class of ordered containers.
   */
  Seq: new LitVocabTerm(
    _NS("Seq"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Seq`)
    .addCommentNoLanguage(`The class of ordered containers.`),

  /**
   * The class of containers of alternatives.
   */
  Alt: new LitVocabTerm(
    _NS("Alt"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Alt`)
    .addCommentNoLanguage(`The class of containers of alternatives.`),

  /**
   * The class of RDF Lists.
   */
  List: new LitVocabTerm(
    _NS("List"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`List`)
    .addCommentNoLanguage(`The class of RDF Lists.`),

  /**
   * The datatype of XML literal values.
   */
  XMLLiteral: new LitVocabTerm(
    _NS("XMLLiteral"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`XMLLiteral`)
    .addCommentNoLanguage(`The datatype of XML literal values.`),

  /**
   * The datatype of RDF literals storing JSON content.
   */
  JSON: new LitVocabTerm(
    _NS("JSON"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`JSON`)
    .addCommentNoLanguage(`The datatype of RDF literals storing JSON content.`),

  /**
   * A class representing a compound literal.
   */
  CompoundLiteral: new LitVocabTerm(
    _NS("CompoundLiteral"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`CompoundLiteral`)
    .addCommentNoLanguage(`A class representing a compound literal.`),

  // *******************
  // All the Properties.
  // *******************

  /**
   * The subject is an instance of a class.
   */
  type: new LitVocabTerm(
    _NS("type"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`type`)
    .addCommentNoLanguage(`The subject is an instance of a class.`),

  /**
   * The subject of the subject RDF statement.
   */
  subject: new LitVocabTerm(
    _NS("subject"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`subject`)
    .addCommentNoLanguage(`The subject of the subject RDF statement.`),

  /**
   * The predicate of the subject RDF statement.
   */
  predicate: new LitVocabTerm(
    _NS("predicate"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`predicate`)
    .addCommentNoLanguage(`The predicate of the subject RDF statement.`),

  /**
   * The object of the subject RDF statement.
   */
  object: new LitVocabTerm(
    _NS("object"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`object`)
    .addCommentNoLanguage(`The object of the subject RDF statement.`),

  /**
   * Idiomatic property used for structured values.
   */
  value: new LitVocabTerm(
    _NS("value"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`value`)
    .addCommentNoLanguage(`Idiomatic property used for structured values.`),

  /**
   * The first item in the subject RDF list.
   */
  first: new LitVocabTerm(
    _NS("first"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`first`)
    .addCommentNoLanguage(`The first item in the subject RDF list.`),

  /**
   * The rest of the subject RDF list after the first item.
   */
  rest: new LitVocabTerm(
    _NS("rest"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`rest`)
    .addCommentNoLanguage(`The rest of the subject RDF list after the first item.`),

  /**
   * The language component of a CompoundLiteral.
   */
  language: new LitVocabTerm(
    _NS("language"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`language`)
    .addCommentNoLanguage(`The language component of a CompoundLiteral.`),

  /**
   * The base direction component of a CompoundLiteral.
   */
  direction: new LitVocabTerm(
    _NS("direction"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`direction`)
    .addCommentNoLanguage(`The base direction component of a CompoundLiteral.`),

};

export { RDF };