    /*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

const $rdf = require("rdflib");

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-solid-common], version: [0.3.2]
  at 'Tuesday, May 5, 2020 4:20 PM'.

  Vocabulary built from vocab list file: [solid-rdf-vocab/Common/Vocab-List-Solid-Common.yml].

  The Solid vocabulary providing terms (e.g. classes, properties and text strings (e.g.
 informative labels or error messages) commonly used across Solid services.
 */

const RDFLIB_NAMESPACE = new $rdf.Namespace("https://inrupt.net/vocab/solid-service-common#");

const _NAMESPACE = "https://inrupt.net/vocab/solid-service-common#";
function _NS (localName) {
  return (_NAMESPACE + localName);
}

const SOLID_SERVICE_COMMON = {
  PREFIX: "solid-service-common",
  NAMESPACE: _NAMESPACE,
  PREFIX_AND_NAMESPACE: { "solid-service-common": "https://inrupt.net/vocab/solid-service-common#" },
  NS: _NS,



    // *******************
    // All the Literals.
    // *******************

    /**
     * Failed to process incoming message as RDF
     */
    errFailedToProcessIncomingRdf: $rdf.sym(_NS("errFailedToProcessIncomingRdf")),

    /**
     * Incoming request validated as RDF (it contains [{{0}}] triples!)
     */
    msgRequestValidatedAsRdf: $rdf.sym(_NS("msgRequestValidatedAsRdf")),
  //
  // Marker allowing us put commas at the end of all lines above (only the last line does not have a comma).
  //
  END_OF_VOCAB: "End of vocab."
}

module.exports = SOLID_SERVICE_COMMON;
