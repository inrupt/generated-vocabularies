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
 informative labels or error messages) used by LIT servers at server creation time.
 */

function _NS(localName: string) { 
  return (namedNode("https://w3id.org/lit/vocab/lit-meta-server-creational#" + localName));
}

const LIT_META_SERVER_CREATIONAL = {
  PREFIX: "lit-meta-server-creational",
  NAMESPACE: "https://w3id.org/lit/vocab/lit-meta-server-creational#",
  PREFIX_AND_NAMESPACE: { "lit-meta-server-creational": "https://w3id.org/lit/vocab/lit-meta-server-creational#" },
  NS: _NS,


  // *******************
  // All the Properties.
  // *******************

  /**
   * The root subject for creation-time server-generated metadata.
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
    .addComment(`The root subject for creation-time server-generated metadata.
 The idea for subject roots is that we could build up an entire graph of
 metadata (i.e. as processing progresses along a chain of processors, with each
 processor enriching this metadata with their specific metadata), and this
 term defines the root term of that graph.`, "en"),

  /**
   * Host name of the server processing this request.
   */
  hostName: new LitVocabTerm(
    _NS("hostName"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Subject root`, "en")
    .addComment(`Host name of the server processing this request.`, "en"),

  /**
   * Host IP address of the server processing this request.
   */
  hostIpAddress: new LitVocabTerm(
    _NS("hostIpAddress"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Host IP address`, "en")
    .addComment(`Host IP address of the server processing this request.`, "en"),

  /**
   * Timestamp this server was instantiated.
   */
  createdTimestamp: new LitVocabTerm(
    _NS("createdTimestamp"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Created timestamp`, "en")
    .addComment(`Timestamp this server was instantiated.`, "en"),

  /**
   * Base IRI that will be used for manipulating (reading/writing) RDF resources containing relative (e.g Turtle or Trig).
   */
  resourceBaseIri: new LitVocabTerm(
    _NS("resourceBaseIri"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Resource base IRI `, "en")
    .addComment(`Base IRI that will be used for manipulating (reading/writing) RDF resources containing relative (e.g Turtle or Trig).`, "en"),

};

export { LIT_META_SERVER_CREATIONAL };
