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
  return (namedNode("http://purl.org/ontology/olo/core#" + localName));
}

const OLO = {
  PREFIX: "olo",
  NAMESPACE: "http://purl.org/ontology/olo/core#",
  PREFIX_AND_NAMESPACE: { "olo": "http://purl.org/ontology/olo/core#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * An ordered list with a given length an indexed items.
   */
  OrderedList: new LitVocabTerm(
    _NS("OrderedList"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Ordered List`, "en")
    .addComment(`An ordered list with a given length an indexed items.`, "en"),

  /**
   * A slot in an ordered list with a fixed index.
   */
  Slot: new LitVocabTerm(
    _NS("Slot"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Slot`, "en")
    .addComment(`A slot in an ordered list with a fixed index.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * The length of an ordered list.
   */
  length: new LitVocabTerm(
    _NS("length"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has length`, "en")
    .addComment(`The length of an ordered list.`, "en"),

  /**
   * Associates the next slot in an ordered list.
   */
  next: new LitVocabTerm(
    _NS("next"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has next`, "en")
    .addComment(`Associates the next slot in an ordered list.`, "en"),

  /**
   * An index of a slot in an ordered list.
   */
  index: new LitVocabTerm(
    _NS("index"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has index`, "en")
    .addComment(`An index of a slot in an ordered list.`, "en"),

  /**
   * An ordered list of an slot.
   */
  ordered_list: new LitVocabTerm(
    _NS("ordered_list"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has ordered list`, "en")
    .addComment(`An ordered list of an slot.`, "en"),

  /**
   * Associates the previous slot in an ordered list
   */
  previous: new LitVocabTerm(
    _NS("previous"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has previous`, "en")
    .addComment(`Associates the previous slot in an ordered list`, "en"),

  /**
   * An item of a slot in an ordered list.
   */
  item: new LitVocabTerm(
    _NS("item"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has item`, "en")
    .addComment(`An item of a slot in an ordered list.`, "en"),

  /**
   * A slot in an ordered list.
   */
  slot: new LitVocabTerm(
    _NS("slot"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has slot`, "en")
    .addComment(`A slot in an ordered list.`, "en"),

};

export { OLO };
