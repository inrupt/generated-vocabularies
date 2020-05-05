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
  as part of artifact: [vocab-core], version: [0.3.3]
  at 'Tuesday, May 5, 2020 4:18 PM'.

  Vocabulary built from vocab list file: [lit-rdf-vocab/Core/Vocab-List-LIT-Core.yml].

  The LIT vocabulary providing terms (e.g. classes, properties and text strings (e.g.
 informative labels or error messages) usable by SHACL validation engines at runtime.
 */

function _NS(localName: string) { 
  return (namedNode("https://w3id.org/lit/vocab/lit-meta-shacl#" + localName));
}

const LIT_META_SHACL = {
  PREFIX: "lit-meta-shacl",
  NAMESPACE: "https://w3id.org/lit/vocab/lit-meta-shacl#",
  PREFIX_AND_NAMESPACE: { "lit-meta-shacl": "https://w3id.org/lit/vocab/lit-meta-shacl#" },
  NS: _NS,


  // *******************
  // All the Properties.
  // *******************

  /**
   * The root subject for SHACL metadata.
 The idea for subject roots is that we could build up an entire graph of
 metadata (i.e. as processing progresses along a chain of processors, with each
 processor enriching this metadata with their specific metadata), and this
 term defines the root term of that graph.
   */
  subjectRoot: new LitVocabTerm(
    _NS("subjectRoot"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Subject root`, "en")
    .addComment(`The root subject for SHACL metadata.
 The idea for subject roots is that we could build up an entire graph of
 metadata (i.e. as processing progresses along a chain of processors, with each
 processor enriching this metadata with their specific metadata), and this
 term defines the root term of that graph.`, "en"),

  /**
   * References a Shape to use to validate the current message payload.
   */
  shapeToApply: new LitVocabTerm(
    _NS("shapeToApply"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Shape to apply`, "en")
    .addComment(`References a Shape to use to validate the current message payload.`, "en"),

};

export { LIT_META_SHACL };