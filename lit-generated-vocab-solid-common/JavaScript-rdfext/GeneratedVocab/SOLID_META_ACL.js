    /*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

const namespace = require("@rdfjs/namespace");

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-solid-common], version: [0.3.2]
  at 'Tuesday, May 5, 2020 4:20 PM'.

  Vocabulary built from vocab list file: [solid-rdf-vocab/Common/Vocab-List-Solid-Common.yml].

  The Solid vocabulary providing terms (e.g. classes, properties and text strings (e.g.
 informative labels or error messages) used by the Solid ACL system.
 */

const RDFJS_NAMESPACE = namespace("https://inrupt.net/vocab/solid-meta-acl#");

const _NAMESPACE = "https://inrupt.net/vocab/solid-meta-acl#";
function _NS (localName) {
  return (_NAMESPACE + localName);
}

const SOLID_META_ACL = {
  PREFIX: "solid-meta-acl",
  NAMESPACE: _NAMESPACE,
  PREFIX_AND_NAMESPACE: { "solid-meta-acl": "https://inrupt.net/vocab/solid-meta-acl#" },
  NS: _NS,


  // *******************
  // All the Properties.
  // *******************

  /**
   * The root subject for ACL metadata.
 The idea for subject roots is that we could build up an entire graph of
 metadata (i.e. as processing progresses along a chain of processors, with each
 processor enriching this metadata with their specific metadata), and this
 term defines the root term of that graph.
   */
  subjectRoot: RDFJS_NAMESPACE("subjectRoot"),

  /**
   * The URI that contains the ACL
   */
  aclUri: RDFJS_NAMESPACE("aclUri"),

  //
  // Marker allowing us put commas at the end of all lines above (only the last line does not have a comma).
  //
  END_OF_VOCAB: 'End of vocab.'
}

module.exports = SOLID_META_ACL;
