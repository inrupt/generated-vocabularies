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
  return (namedNode("https://www.w3.org/ns/activitystreams#" + localName));
}

const AS = {
  PREFIX: "as",
  NAMESPACE: "https://www.w3.org/ns/activitystreams#",
  PREFIX_AND_NAMESPACE: { "as": "https://www.w3.org/ns/activitystreams#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * An Object representing some form of Action that has been taken
   */
  Activity: new LitVocabTerm(
    _NS("Activity"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Activity`, "en")
    .addComment(`An Object representing some form of Action that has been taken`, "en"),

  /**
   * Object
   */
  Object: new LitVocabTerm(
    _NS("Object"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Object`, "en"),

  /**
   * Represents a qualified reference to another resource. Patterned after the RFC5988 Web Linking Model
   */
  Link: new LitVocabTerm(
    _NS("Link"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Link`, "en")
    .addComment(`Represents a qualified reference to another resource. Patterned after the RFC5988 Web Linking Model`, "en"),

  /**
   * An ordered or unordered collection of Objects or Links
   */
  Collection: new LitVocabTerm(
    _NS("Collection"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Collection`, "en")
    .addComment(`An ordered or unordered collection of Objects or Links`, "en"),

  /**
   * A subset of items from a Collection
   */
  CollectionPage: new LitVocabTerm(
    _NS("CollectionPage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`CollectionPage`, "en")
    .addComment(`A subset of items from a Collection`, "en"),

  /**
   * An Image file
   */
  Image: new LitVocabTerm(
    _NS("Image"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Image`, "en")
    .addComment(`An Image file`, "en"),

  /**
   * A rdf:List variant for Objects and Links
   */
  OrderedItems: new LitVocabTerm(
    _NS("OrderedItems"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`OrderedItems`, "en")
    .addComment(`A rdf:List variant for Objects and Links`, "en"),

  /**
   * Represents a Social Graph relationship between two Individuals (indicated by the 'a' and 'b' properties)
   */
  Relationship: new LitVocabTerm(
    _NS("Relationship"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Relationship`, "en")
    .addComment(`Represents a Social Graph relationship between two Individuals (indicated by the 'a' and 'b' properties)`, "en"),

  /**
   * A question of any sort.
   */
  Question: new LitVocabTerm(
    _NS("Question"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Question`, "en")
    .addComment(`A question of any sort.`, "en"),

  /**
   * A Profile Document
   */
  Profile: new LitVocabTerm(
    _NS("Profile"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Profile`, "en")
    .addComment(`A Profile Document`, "en"),

  /**
   * A placeholder for a deleted object
   */
  Tombstone: new LitVocabTerm(
    _NS("Tombstone"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Tombstone`, "en")
    .addComment(`A placeholder for a deleted object`, "en"),

  /**
   * A physical or logical location
   */
  Place: new LitVocabTerm(
    _NS("Place"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Place`, "en")
    .addComment(`A physical or logical location`, "en"),

  /**
   * An ordered subset of items from an OrderedCollection
   */
  OrderedCollectionPage: new LitVocabTerm(
    _NS("OrderedCollectionPage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`OrderedCollectionPage`, "en")
    .addComment(`An ordered subset of items from an OrderedCollection`, "en"),

  /**
   * Actor accepts the Object
   */
  Accept: new LitVocabTerm(
    _NS("Accept"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Accept`, "en")
    .addComment(`Actor accepts the Object`, "en"),

  /**
   * Block
   */
  Block: new LitVocabTerm(
    _NS("Block"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Block`, "en"),

  /**
   * Actor is ignoring the Object
   */
  Ignore: new LitVocabTerm(
    _NS("Ignore"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Ignore`, "en")
    .addComment(`Actor is ignoring the Object`, "en"),

  /**
   * An Activity that has no direct object
   */
  IntransitiveActivity: new LitVocabTerm(
    _NS("IntransitiveActivity"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`IntransitiveActivity`, "en")
    .addComment(`An Activity that has no direct object`, "en"),

  /**
   * To Add an Object or Link to Something
   */
  Add: new LitVocabTerm(
    _NS("Add"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Add`, "en")
    .addComment(`To Add an Object or Link to Something`, "en"),

  /**
   * Actor announces the object to the target
   */
  Announce: new LitVocabTerm(
    _NS("Announce"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Announce`, "en")
    .addComment(`Actor announces the object to the target`, "en"),

  /**
   * Represents a software application of any sort
   */
  Application: new LitVocabTerm(
    _NS("Application"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Application`, "en")
    .addComment(`Represents a software application of any sort`, "en"),

  /**
   * To Arrive Somewhere (can be used, for instance, to indicate that a particular entity is currently located somewhere, e.g. a "check-in")
   */
  Arrive: new LitVocabTerm(
    _NS("Arrive"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Arrive`, "en")
    .addComment(`To Arrive Somewhere (can be used, for instance, to indicate that a particular entity is currently located somewhere, e.g. a "check-in")`, "en"),

  /**
   * A written work. Typically several paragraphs long. For example, a blog post or a news article.
   */
  Article: new LitVocabTerm(
    _NS("Article"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Article`, "en")
    .addComment(`A written work. Typically several paragraphs long. For example, a blog post or a news article.`, "en"),

  /**
   * An audio file
   */
  Audio: new LitVocabTerm(
    _NS("Audio"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Audio`, "en")
    .addComment(`An audio file`, "en"),

  /**
   * Represents a digital document/file of any sort
   */
  Document: new LitVocabTerm(
    _NS("Document"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Document`, "en")
    .addComment(`Represents a digital document/file of any sort`, "en"),

  /**
   * A variation of Collection in which items are strictly ordered
   */
  OrderedCollection: new LitVocabTerm(
    _NS("OrderedCollection"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`OrderedCollection`, "en")
    .addComment(`A variation of Collection in which items are strictly ordered`, "en"),

  /**
   * To Create Something
   */
  Create: new LitVocabTerm(
    _NS("Create"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Create`, "en")
    .addComment(`To Create Something`, "en"),

  /**
   * To Delete Something
   */
  Delete: new LitVocabTerm(
    _NS("Delete"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Delete`, "en")
    .addComment(`To Delete Something`, "en"),

  /**
   * The actor dislikes the object
   */
  Dislike: new LitVocabTerm(
    _NS("Dislike"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Dislike`, "en")
    .addComment(`The actor dislikes the object`, "en"),

  /**
   * An Event of any kind
   */
  Event: new LitVocabTerm(
    _NS("Event"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Event`, "en")
    .addComment(`An Event of any kind`, "en"),

  /**
   * To flag something (e.g. flag as inappropriate, flag as spam, etc)
   */
  Flag: new LitVocabTerm(
    _NS("Flag"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Flag`, "en")
    .addComment(`To flag something (e.g. flag as inappropriate, flag as spam, etc)`, "en"),

  /**
   * To Express Interest in Something
   */
  Follow: new LitVocabTerm(
    _NS("Follow"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Follow`, "en")
    .addComment(`To Express Interest in Something`, "en"),

  /**
   * A Group of any kind.
   */
  Group: new LitVocabTerm(
    _NS("Group"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Group`, "en")
    .addComment(`A Group of any kind.`, "en"),

  /**
   * To invite someone or something to something
   */
  Invite: new LitVocabTerm(
    _NS("Invite"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Invite`, "en")
    .addComment(`To invite someone or something to something`, "en"),

  /**
   * To Offer something to someone or something
   */
  Offer: new LitVocabTerm(
    _NS("Offer"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Offer`, "en")
    .addComment(`To Offer something to someone or something`, "en"),

  /**
   * To Join Something
   */
  Join: new LitVocabTerm(
    _NS("Join"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Join`, "en")
    .addComment(`To Join Something`, "en"),

  /**
   * To Leave Something
   */
  Leave: new LitVocabTerm(
    _NS("Leave"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Leave`, "en")
    .addComment(`To Leave Something`, "en"),

  /**
   * To Like Something
   */
  Like: new LitVocabTerm(
    _NS("Like"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Like`, "en")
    .addComment(`To Like Something`, "en"),

  /**
   * The actor viewed the object
   */
  View: new LitVocabTerm(
    _NS("View"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`View`, "en")
    .addComment(`The actor viewed the object`, "en"),

  /**
   * The actor listened to the object
   */
  Listen: new LitVocabTerm(
    _NS("Listen"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Listen`, "en")
    .addComment(`The actor listened to the object`, "en"),

  /**
   * The actor read the object
   */
  Read: new LitVocabTerm(
    _NS("Read"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Read`, "en")
    .addComment(`The actor read the object`, "en"),

  /**
   * The actor is moving the object. The target specifies where the object is moving to. The origin specifies where the object is moving from.
   */
  Move: new LitVocabTerm(
    _NS("Move"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Move`, "en")
    .addCommentNoLanguage(`The actor is moving the object. The target specifies where the object is moving to. The origin specifies where the object is moving from.`),

  /**
   * The actor is traveling to the target. The origin specifies where the actor is traveling from.
   */
  Travel: new LitVocabTerm(
    _NS("Travel"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Travel`, "en")
    .addCommentNoLanguage(`The actor is traveling to the target. The origin specifies where the actor is traveling from.`),

  /**
   * A specialized Link that represents an @mention
   */
  Mention: new LitVocabTerm(
    _NS("Mention"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Mention`, "en")
    .addComment(`A specialized Link that represents an @mention`, "en"),

  /**
   * A Short note, typically less than a single paragraph. A "tweet" is an example, or a "status update"
   */
  Note: new LitVocabTerm(
    _NS("Note"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Note`, "en")
    .addComment(`A Short note, typically less than a single paragraph. A "tweet" is an example, or a "status update"`, "en"),

  /**
   * A Web Page
   */
  Page: new LitVocabTerm(
    _NS("Page"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Page`, "en")
    .addComment(`A Web Page`, "en"),

  /**
   * A Person
   */
  Person: new LitVocabTerm(
    _NS("Person"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Person`, "en")
    .addComment(`A Person`, "en"),

  /**
   * An Organization
   */
  Organization: new LitVocabTerm(
    _NS("Organization"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Organization`, "en")
    .addComment(`An Organization`, "en"),

  /**
   * Actor rejects the Object
   */
  Reject: new LitVocabTerm(
    _NS("Reject"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Reject`, "en")
    .addComment(`Actor rejects the Object`, "en"),

  /**
   * To Remove Something
   */
  Remove: new LitVocabTerm(
    _NS("Remove"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Remove`, "en")
    .addComment(`To Remove Something`, "en"),

  /**
   * A service provided by some entity
   */
  Service: new LitVocabTerm(
    _NS("Service"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Service`, "en")
    .addComment(`A service provided by some entity`, "en"),

  /**
   * Actor tentatively accepts the Object
   */
  TentativeAccept: new LitVocabTerm(
    _NS("TentativeAccept"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`TentativeAccept`, "en")
    .addComment(`Actor tentatively accepts the Object`, "en"),

  /**
   * Actor tentatively rejects the object
   */
  TentativeReject: new LitVocabTerm(
    _NS("TentativeReject"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`TentativeReject`, "en")
    .addComment(`Actor tentatively rejects the object`, "en"),

  /**
   * To Undo Something. This would typically be used to indicate that a previous Activity has been undone.
   */
  Undo: new LitVocabTerm(
    _NS("Undo"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Undo`, "en")
    .addComment(`To Undo Something. This would typically be used to indicate that a previous Activity has been undone.`, "en"),

  /**
   * To Update/Modify Something
   */
  Update: new LitVocabTerm(
    _NS("Update"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Update`, "en")
    .addComment(`To Update/Modify Something`, "en"),

  /**
   * A Video document of any kind.
   */
  Video: new LitVocabTerm(
    _NS("Video"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Video`, "en")
    .addComment(`A Video document of any kind.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * Subproperty of as:attributedTo that identifies the primary actor
   */
  actor: new LitVocabTerm(
    _NS("actor"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`actor`, "en")
    .addComment(`Subproperty of as:attributedTo that identifies the primary actor`, "en"),

  /**
   * Identifies an entity to which an object is attributed
   */
  attributedTo: new LitVocabTerm(
    _NS("attributedTo"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`attributedTo`, "en")
    .addComment(`Identifies an entity to which an object is attributed`, "en"),

  /**
   * attachment
   */
  attachment: new LitVocabTerm(
    _NS("attachment"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`attachment`, "en"),

  /**
   * attachments
   */
  attachments: new LitVocabTerm(
    _NS("attachments"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`attachments`, "en"),

  /**
   * Identifies the author of an object. Deprecated. Use as:attributedTo instead
   */
  author: new LitVocabTerm(
    _NS("author"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`author`, "en")
    .addComment(`Identifies the author of an object. Deprecated. Use as:attributedTo instead`, "en"),

  /**
   * bcc
   */
  bcc: new LitVocabTerm(
    _NS("bcc"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`bcc`, "en"),

  /**
   * bto
   */
  bto: new LitVocabTerm(
    _NS("bto"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`bto`, "en"),

  /**
   * cc
   */
  cc: new LitVocabTerm(
    _NS("cc"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`cc`, "en"),

  /**
   * Specifies the context within which an object exists or an activity was performed
   */
  context: new LitVocabTerm(
    _NS("context"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`context`, "en")
    .addComment(`Specifies the context within which an object exists or an activity was performed`, "en"),

  /**
   * current
   */
  current: new LitVocabTerm(
    _NS("current"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`current`, "en"),

  /**
   * first
   */
  first: new LitVocabTerm(
    _NS("first"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`first`, "en"),

  /**
   * generator
   */
  generator: new LitVocabTerm(
    _NS("generator"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`generator`, "en"),

  /**
   * icon
   */
  icon: new LitVocabTerm(
    _NS("icon"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`icon`, "en"),

  /**
   * image
   */
  image: new LitVocabTerm(
    _NS("image"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`image`, "en"),

  /**
   * inReplyTo
   */
  inReplyTo: new LitVocabTerm(
    _NS("inReplyTo"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`inReplyTo`, "en"),

  /**
   * items
   */
  items: new LitVocabTerm(
    _NS("items"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`items`, "en"),

  /**
   * last
   */
  last: new LitVocabTerm(
    _NS("last"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`last`, "en"),

  /**
   * location
   */
  location: new LitVocabTerm(
    _NS("location"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`location`, "en"),

  /**
   * next
   */
  next: new LitVocabTerm(
    _NS("next"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`next`, "en"),

  /**
   * object
   */
  object: new LitVocabTerm(
    _NS("object"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`object`, "en"),

  /**
   * Describes a possible exclusive answer or option for a question.
   */
  oneOf: new LitVocabTerm(
    _NS("oneOf"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`oneOf`, "en")
    .addComment(`Describes a possible exclusive answer or option for a question.`, "en"),

  /**
   * Describes a possible inclusive answer or option for a question.
   */
  anyOf: new LitVocabTerm(
    _NS("anyOf"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`oneOf`, "en")
    .addComment(`Describes a possible inclusive answer or option for a question.`, "en"),

  /**
   * prev
   */
  prev: new LitVocabTerm(
    _NS("prev"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`prev`, "en"),

  /**
   * preview
   */
  preview: new LitVocabTerm(
    _NS("preview"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`preview`, "en"),

  /**
   * provider
   */
  provider: new LitVocabTerm(
    _NS("provider"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`provider`, "en"),

  /**
   * replies
   */
  replies: new LitVocabTerm(
    _NS("replies"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`replies`, "en"),

  /**
   * result
   */
  result: new LitVocabTerm(
    _NS("result"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`result`, "en"),

  /**
   * audience
   */
  audience: new LitVocabTerm(
    _NS("audience"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`audience`, "en"),

  /**
   * partOf
   */
  partOf: new LitVocabTerm(
    _NS("partOf"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`partOf`, "en"),

  /**
   * tag
   */
  tag: new LitVocabTerm(
    _NS("tag"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`tag`, "en"),

  /**
   * tags
   */
  tags: new LitVocabTerm(
    _NS("tags"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`tags`, "en"),

  /**
   * target
   */
  target: new LitVocabTerm(
    _NS("target"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`target`, "en"),

  /**
   * For certain activities, specifies the entity from which the action is directed.
   */
  origin: new LitVocabTerm(
    _NS("origin"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`origin`, "en")
    .addComment(`For certain activities, specifies the entity from which the action is directed.`, "en"),

  /**
   * Indentifies an object used (or to be used) to complete an activity
   */
  instrument: new LitVocabTerm(
    _NS("instrument"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`instrument`, "en")
    .addComment(`Indentifies an object used (or to be used) to complete an activity`, "en"),

  /**
   * to
   */
  to: new LitVocabTerm(
    _NS("to"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`to`, "en"),

  /**
   * Specifies a link to a specific representation of the Object
   */
  url: new LitVocabTerm(
    _NS("url"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`url`, "en")
    .addComment(`Specifies a link to a specific representation of the Object`, "en"),

  /**
   * On a Relationship object, identifies the subject. e.g. when saying "John is connected to Sally", 'subject' refers to 'John'
   */
  subject: new LitVocabTerm(
    _NS("subject"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`a`, "en")
    .addComment(`On a Relationship object, identifies the subject. e.g. when saying "John is connected to Sally", 'subject' refers to 'John'`, "en"),

  /**
   * On a Relationship object, describes the type of relationship
   */
  relationship: new LitVocabTerm(
    _NS("relationship"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`relationship`, "en")
    .addComment(`On a Relationship object, describes the type of relationship`, "en"),

  /**
   * On a Profile object, describes the object described by the profile
   */
  describes: new LitVocabTerm(
    _NS("describes"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`describes`, "en")
    .addComment(`On a Profile object, describes the object described by the profile`, "en"),

  /**
   * On a Tombstone object, describes the former type of the deleted object
   */
  formerType: new LitVocabTerm(
    _NS("formerType"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`formerType`, "en")
    .addComment(`On a Tombstone object, describes the former type of the deleted object`, "en"),

  /**
   * Specifies the accuracy around the point established by the longitude and latitude
   */
  accuracy: new LitVocabTerm(
    _NS("accuracy"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`accuracy`, "en")
    .addComment(`Specifies the accuracy around the point established by the longitude and latitude`, "en"),

  /**
   * The altitude of a place
   */
  altitude: new LitVocabTerm(
    _NS("altitude"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`altitude`, "en")
    .addComment(`The altitude of a place`, "en"),

  /**
   * The content of the object.
   */
  content: new LitVocabTerm(
    _NS("content"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`content`, "en")
    .addComment(`The content of the object.`, "en"),

  /**
   * name
   */
  name: new LitVocabTerm(
    _NS("name"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`name`, "en"),

  /**
   * downstreamDuplicates
   */
  downstreamDuplicates: new LitVocabTerm(
    _NS("downstreamDuplicates"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`downstreamDuplicates`, "en"),

  /**
   * The duration of the object
   */
  duration: new LitVocabTerm(
    _NS("duration"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`duration`, "en")
    .addComment(`The duration of the object`, "en"),

  /**
   * The ending time of the object
   */
  endTime: new LitVocabTerm(
    _NS("endTime"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`endTime`, "en")
    .addComment(`The ending time of the object`, "en"),

  /**
   * The display height expressed as device independent pixels
   */
  height: new LitVocabTerm(
    _NS("height"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`height`, "en")
    .addComment(`The display height expressed as device independent pixels`, "en"),

  /**
   * The target URI of the Link
   */
  href: new LitVocabTerm(
    _NS("href"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`href`, "en")
    .addComment(`The target URI of the Link`, "en"),

  /**
   * A hint about the language of the referenced resource
   */
  hreflang: new LitVocabTerm(
    _NS("hreflang"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`hreflang`, "en")
    .addComment(`A hint about the language of the referenced resource`, "en"),

  /**
   * id
   */
  id: new LitVocabTerm(
    _NS("id"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`id`, "en"),

  /**
   * The latitude
   */
  latitude: new LitVocabTerm(
    _NS("latitude"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`latitude`, "en")
    .addComment(`The latitude`, "en"),

  /**
   * The longitude
   */
  longitude: new LitVocabTerm(
    _NS("longitude"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`longitude`, "en")
    .addComment(`The longitude`, "en"),

  /**
   * The MIME Media Type
   */
  mediaType: new LitVocabTerm(
    _NS("mediaType"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`mediaType`, "en")
    .addComment(`The MIME Media Type`, "en"),

  /**
   * objectType
   */
  objectType: new LitVocabTerm(
    _NS("objectType"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`objectType`, "en"),

  /**
   * Specifies the date and time the object was published
   */
  published: new LitVocabTerm(
    _NS("published"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`published`, "en")
    .addComment(`Specifies the date and time the object was published`, "en"),

  /**
   * Specifies a radius around the point established by the longitude and latitude
   */
  radius: new LitVocabTerm(
    _NS("radius"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`radius`, "en")
    .addComment(`Specifies a radius around the point established by the longitude and latitude`, "en"),

  /**
   * A numeric rating (>= 0.0, <= 5.0) for the object
   */
  rating: new LitVocabTerm(
    _NS("rating"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`rating`, "en")
    .addComment(`A numeric rating (>= 0.0, <= 5.0) for the object`, "en"),

  /**
   * The RFC 5988 or HTML5 Link Relation associated with the Link
   */
  rel: new LitVocabTerm(
    _NS("rel"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`rel`, "en")
    .addComment(`The RFC 5988 or HTML5 Link Relation associated with the Link`, "en"),

  /**
   * In a strictly ordered logical collection, specifies the index position of the first item in the items list
   */
  startIndex: new LitVocabTerm(
    _NS("startIndex"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`startIndex`, "en")
    .addComment(`In a strictly ordered logical collection, specifies the index position of the first item in the items list`, "en"),

  /**
   * The starting time of the object
   */
  startTime: new LitVocabTerm(
    _NS("startTime"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`startTime`, "en")
    .addComment(`The starting time of the object`, "en"),

  /**
   * A short summary of the object
   */
  summary: new LitVocabTerm(
    _NS("summary"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`summary`, "en")
    .addComment(`A short summary of the object`, "en"),

  /**
   * The total number of items in a logical collection
   */
  totalItems: new LitVocabTerm(
    _NS("totalItems"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`totalItems`, "en")
    .addComment(`The total number of items in a logical collection`, "en"),

  /**
   * Identifies the unit of measurement used by the radius, altitude and accuracy properties. The value can be expressed either as one of a set of predefined units or as a well-known common URI that identifies units.
   */
  units: new LitVocabTerm(
    _NS("units"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`units`, "en")
    .addComment(`Identifies the unit of measurement used by the radius, altitude and accuracy properties. The value can be expressed either as one of a set of predefined units or as a well-known common URI that identifies units.`, "en"),

  /**
   * Specifies when the object was last updated
   */
  updated: new LitVocabTerm(
    _NS("updated"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`updated`, "en")
    .addComment(`Specifies when the object was last updated`, "en"),

  /**
   * upstreamDuplicates
   */
  upstreamDuplicates: new LitVocabTerm(
    _NS("upstreamDuplicates"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`upstreamDuplicates`, "en"),

  /**
   * verb
   */
  verb: new LitVocabTerm(
    _NS("verb"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`verb`, "en"),

  /**
   * Specifies the preferred display width of the content, expressed in terms of device independent pixels.
   */
  width: new LitVocabTerm(
    _NS("width"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`width`, "en")
    .addComment(`Specifies the preferred display width of the content, expressed in terms of device independent pixels.`, "en"),

  /**
   * Specifies the date and time the object was deleted
   */
  deleted: new LitVocabTerm(
    _NS("deleted"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`deleted`, "en")
    .addComment(`Specifies the date and time the object was deleted`, "en"),

};

export { AS };
