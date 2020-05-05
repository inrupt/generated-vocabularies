    /*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

const { LitVocabTerm, getLocalStore } = require("@inrupt/lit-vocab-term");
const dataFactory = require("@rdfjs/data-model");
const namedNode = dataFactory.namedNode;

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-solid-common], version: [0.3.2]
  at 'Tuesday, May 5, 2020 4:20 PM'.

  Vocabulary built from vocab list file: [solid-rdf-vocab/Common/Vocab-List-Solid-Common.yml].
 */

function _NS(localName) {
  return (namedNode("http://www.w3.org/ns/solid/terms#" + localName));
}

const SOLID = {
  PREFIX: "solid",
  NAMESPACE: "http://www.w3.org/ns/solid/terms#",
  PREFIX_AND_NAMESPACE: { "solid": "http://www.w3.org/ns/solid/terms#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * A Solid account.
   */
  Account: new LitVocabTerm(
    _NS("Account"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Account`, "en")
    .addComment(`A Solid account.`, "en"),

  /**
   * A resource containing notifications.
   */
  Inbox: new LitVocabTerm(
    _NS("Inbox"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Inbox`, "en")
    .addComment(`A resource containing notifications.`, "en"),

  /**
   * Listed Type Index is a registry of resources that are publicly discoverable by outside users and applications.
   */
  ListedDocument: new LitVocabTerm(
    _NS("ListedDocument"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Listed Type Index`, "en")
    .addComment(`Listed Type Index is a registry of resources that are publicly discoverable by outside users and applications.`, "en"),

  /**
   * A notification resource.
   */
  Notification: new LitVocabTerm(
    _NS("Notification"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Notification`, "en")
    .addComment(`A notification resource.`, "en"),

  /**
   * A patch expresses conditional modifications to a resource that has an RDF-based representation.
   */
  Patch: new LitVocabTerm(
    _NS("Patch"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Patch`, "en")
    .addComment(`A patch expresses conditional modifications to a resource that has an RDF-based representation.`, "en"),

  /**
   * A resource containing time ordered items and sub-containers.  Sub-containers may be desirable in file based systems to split the timeline into logical components e.g. /yyyy-mm-dd/ as used in ISO 8061.
   */
  Timeline: new LitVocabTerm(
    _NS("Timeline"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Timeline`, "en")
    .addComment(`A resource containing time ordered items and sub-containers.  Sub-containers may be desirable in file based systems to split the timeline into logical components e.g. /yyyy-mm-dd/ as used in ISO 8061.`, "en"),

  /**
   * A index of type registries for resources. Applications can register the RDF type they use and list them in the index resource.
   */
  TypeIndex: new LitVocabTerm(
    _NS("TypeIndex"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Type index`, "en")
    .addComment(`A index of type registries for resources. Applications can register the RDF type they use and list them in the index resource.`, "en"),

  /**
   * The registered types that map a RDF classes/types to their locations using either `instance` or `instanceContainer` property.
   */
  TypeRegistration: new LitVocabTerm(
    _NS("TypeRegistration"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Type Registration`, "en")
    .addComment(`The registered types that map a RDF classes/types to their locations using either \`instance\` or \`instanceContainer\` property.`, "en"),

  /**
   * Unlisted Type Index is a registry of resources that are private to the user and their apps, for types that are not publicly discoverable.
   */
  UnlistedDocument: new LitVocabTerm(
    _NS("UnlistedDocument"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Unlisted Type Index`, "en")
    .addComment(`Unlisted Type Index is a registry of resources that are private to the user and their apps, for types that are not publicly discoverable.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * A solid account belonging to an Agent.
   */
  account: new LitVocabTerm(
    _NS("account"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`account`, "en")
    .addComment(`A solid account belonging to an Agent.`, "en"),

  /**
   * The triple patterns this patch removes from the document.
   */
  deletes: new LitVocabTerm(
    _NS("deletes"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`deletes`, "en")
    .addComment(`The triple patterns this patch removes from the document.`, "en"),

  /**
   * A class that is used to map an listed or unlisted type index.
   */
  forClass: new LitVocabTerm(
    _NS("forClass"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`registry class`, "en")
    .addComment(`A class that is used to map an listed or unlisted type index.`, "en"),

  /**
   * Deprecated pointer to a Linked Data Notifications inbox; please use http://www.w3.org/ns/ldp#inbox instead.
   */
  inbox: new LitVocabTerm(
    _NS("inbox"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`inbox (deprecated)`, "en")
    .addComment(`Deprecated pointer to a Linked Data Notifications inbox; please use http://www.w3.org/ns/ldp#inbox instead.`, "en"),

  /**
   * The triple patterns this patch adds to the document.
   */
  inserts: new LitVocabTerm(
    _NS("inserts"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`inserts`, "en")
    .addComment(`The triple patterns this patch adds to the document.`, "en"),

  /**
   * Maps a type to an individual resource, typically an index or a directory listing resource.
   */
  instance: new LitVocabTerm(
    _NS("instance"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`instance`, "en")
    .addComment(`Maps a type to an individual resource, typically an index or a directory listing resource.`, "en"),

  /**
   * Maps a type to a container which the client would have to list to get the instances of that type.
   */
  instanceContainer: new LitVocabTerm(
    _NS("instanceContainer"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`instance container`, "en")
    .addComment(`Maps a type to a container which the client would have to list to get the instances of that type.`, "en"),

  /**
   * The login URI of a given server.
   */
  loginEndpoint: new LitVocabTerm(
    _NS("loginEndpoint"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`loginEndpoint`, "en")
    .addComment(`The login URI of a given server.`, "en"),

  /**
   * The logout URI of a given server.
   */
  logoutEndpoint: new LitVocabTerm(
    _NS("logoutEndpoint"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`logoutEndpoint`, "en")
    .addComment(`The logout URI of a given server.`, "en"),

  /**
   * Notification resource for an inbox.
   */
  notification: new LitVocabTerm(
    _NS("notification"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`notification`, "en")
    .addComment(`Notification resource for an inbox.`, "en"),

  /**
   * Points to an unlisted type index resource.
   */
  privateTypeIndex: new LitVocabTerm(
    _NS("privateTypeIndex"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`private type index`, "en")
    .addComment(`Points to an unlisted type index resource.`, "en"),

  /**
   * Points to a listed type index resource.
   */
  publicTypeIndex: new LitVocabTerm(
    _NS("publicTypeIndex"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`public type index`, "en")
    .addComment(`Points to a listed type index resource.`, "en"),

  /**
   * Points to a TypeIndex resource.
   */
  typeIndex: new LitVocabTerm(
    _NS("typeIndex"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`type index`, "en")
    .addComment(`Points to a TypeIndex resource.`, "en"),

  /**
   * Indicates if a message has been read or not. This property should have a boolean datatype.
   */
  read: new LitVocabTerm(
    _NS("read"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`read`, "en")
    .addComment(`Indicates if a message has been read or not. This property should have a boolean datatype.`, "en"),

  /**
   * The preferred OpenID Connect issuer URI for a given Web ID.
   */
  oidcIssuer: new LitVocabTerm(
    _NS("oidcIssuer"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`oidcIssuer`, "en")
    .addComment(`The preferred OpenID Connect issuer URI for a given Web ID.`, "en"),

  /**
   * The document to which this patch applies.
   */
  patches: new LitVocabTerm(
    _NS("patches"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`patches`, "en")
    .addComment(`The document to which this patch applies.`, "en"),

  /**
   * Timeline for a given resource.
   */
  timeline: new LitVocabTerm(
    _NS("timeline"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`timeline`, "en")
    .addComment(`Timeline for a given resource.`, "en"),

  /**
   * The conditions the document and the inserted and deleted triple patterns need to satisfy in order for the patch to be applied.
   */
  where: new LitVocabTerm(
    _NS("where"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`where`, "en")
    .addComment(`The conditions the document and the inserted and deleted triple patterns need to satisfy in order for the patch to be applied.`, "en"),

  /**
   * The quota of non-volatile memory that is available for the account (in bytes)
   */
  storageQuota: new LitVocabTerm(
    _NS("storageQuota"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Non-volatile memory quota`, "en")
    .addComment(`The quota of non-volatile memory that is available for the account (in bytes)`, "en"),

  /**
   * The amount of non-volatile memory that the account have used (in bytes)
   */
  storageUsage: new LitVocabTerm(
    _NS("storageUsage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Non-volatile memory usage`, "en")
    .addComment(`The amount of non-volatile memory that the account have used (in bytes)`, "en"),

  //
  // Marker allowing us put commas at the end of all lines above (only the last line does not have a comma).
  //
  END_OF_VOCAB: 'End of vocab.'
}

module.exports = SOLID;
