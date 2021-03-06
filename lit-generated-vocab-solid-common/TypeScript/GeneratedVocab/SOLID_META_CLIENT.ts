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
  as part of artifact: [vocab-solid-common], version: [0.3.3]
  at 'Tuesday, May 5, 2020 4:20 PM'.

  Vocabulary built from vocab list file: [solid-rdf-vocab/Common/Vocab-List-Solid-Common.yml].

  The Solid vocabulary providing terms (e.g. classes, properties and text strings (e.g.
 informative labels or error messages) used by Solid clients.
 */

function _NS(localName: string) { 
  return (namedNode("https://inrupt.net/vocab/solid-meta-client#" + localName));
}

const SOLID_META_CLIENT = {
  PREFIX: "solid-meta-client",
  NAMESPACE: "https://inrupt.net/vocab/solid-meta-client#",
  PREFIX_AND_NAMESPACE: { "solid-meta-client": "https://inrupt.net/vocab/solid-meta-client#" },
  NS: _NS,


  // *******************
  // All the Properties.
  // *******************

  /**
   * The root subject for client-generated metadata.
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
    .addComment(`The root subject for client-generated metadata.
 The idea for subject roots is that we could build up an entire graph of
 metadata (i.e. as processing progresses along a chain of processors, with each
 processor enriching this metadata with their specific metadata), and this
 term defines the root term of that graph.`, "en"),

};

export { SOLID_META_CLIENT };
