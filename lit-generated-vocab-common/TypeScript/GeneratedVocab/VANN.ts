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

  A vocabulary for annotating vocabulary descriptions (VANN).
 */

function _NS(localName: string) { 
  return (namedNode("http://purl.org/vocab/vann/" + localName));
}

const VANN = {
  PREFIX: "vann",
  NAMESPACE: "http://purl.org/vocab/vann/",
  PREFIX_AND_NAMESPACE: { "vann": "http://purl.org/vocab/vann/" },
  NS: _NS,


  // *******************
  // All the Properties.
  // *******************

  /**
   * The preferred namespace prefix to ue when using terms from this vocabulary in an XML document.
   */
  preferredNamespacePrefix: new LitVocabTerm(
    _NS("preferredNamespacePrefix"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Preferred namespace prefix`)
    .addCommentNoLanguage(`The preferred namespace prefix to ue when using terms from this vocabulary in an XML document.`),

  /**
   * The preferred namespace URI to use when using terms from this vocabulary in an XML document.
   */
  preferredNamespaceUri: new LitVocabTerm(
    _NS("preferredNamespaceUri"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Preferred namespace URI`)
    .addCommentNoLanguage(`The preferred namespace URI to use when using terms from this vocabulary in an XML document.`),

  /**
   * A reference to a resource that describes changes between this version of a vocabulary and the previous.
   */
  changes: new LitVocabTerm(
    _NS("changes"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`changes`)
    .addCommentNoLanguage(`A reference to a resource that describes changes between this version of a vocabulary and the previous.`),

  /**
   * A reference to a resource that provides an example of how this resource can be used.
   */
  example: new LitVocabTerm(
    _NS("example"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Example`)
    .addCommentNoLanguage(`A reference to a resource that provides an example of how this resource can be used.`),

  /**
   * A group of related terms in a vocabulary.
   */
  termGroup: new LitVocabTerm(
    _NS("termGroup"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Term group`)
    .addCommentNoLanguage(`A group of related terms in a vocabulary.`),

  /**
   * A reference to a resource that provides information on how this resource is to be used.
   */
  usageNote: new LitVocabTerm(
    _NS("usageNote"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Usage note`)
    .addCommentNoLanguage(`A reference to a resource that provides information on how this resource is to be used.`),

};

export { VANN };
