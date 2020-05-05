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
  return (namedNode("http://purl.org/dc/terms/" + localName));
}

const DCTERMS = {
  PREFIX: "dcterms",
  NAMESPACE: "http://purl.org/dc/terms/",
  PREFIX_AND_NAMESPACE: { "dcterms": "http://purl.org/dc/terms/" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * A resource that acts or has the power to act.
   */
  Agent: new LitVocabTerm(
    _NS("Agent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Agent`, "en")
    .addComment(`A resource that acts or has the power to act.`, "en"),

  /**
   * A group of agents.
   */
  AgentClass: new LitVocabTerm(
    _NS("AgentClass"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Agent Class`, "en")
    .addComment(`A group of agents.`, "en"),

  /**
   * A book, article, or other documentary resource.
   */
  BibliographicResource: new LitVocabTerm(
    _NS("BibliographicResource"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Bibliographic Resource`, "en")
    .addComment(`A book, article, or other documentary resource.`, "en"),

  /**
   * A digital resource format.
   */
  FileFormat: new LitVocabTerm(
    _NS("FileFormat"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`File Format`, "en")
    .addComment(`A digital resource format.`, "en"),

  /**
   * A file format or physical medium.
   */
  MediaType: new LitVocabTerm(
    _NS("MediaType"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Media Type`, "en")
    .addComment(`A file format or physical medium.`, "en"),

  /**
   * A rate at which something recurs.
   */
  Frequency: new LitVocabTerm(
    _NS("Frequency"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Frequency`, "en")
    .addComment(`A rate at which something recurs.`, "en"),

  /**
   * The extent or range of judicial, law enforcement, or other authority.
   */
  Jurisdiction: new LitVocabTerm(
    _NS("Jurisdiction"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Jurisdiction`, "en")
    .addComment(`The extent or range of judicial, law enforcement, or other authority.`, "en"),

  /**
   * A location, period of time, or jurisdiction.
   */
  LocationPeriodOrJurisdiction: new LitVocabTerm(
    _NS("LocationPeriodOrJurisdiction"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Location, Period, or Jurisdiction`, "en")
    .addComment(`A location, period of time, or jurisdiction.`, "en"),

  /**
   * A legal document giving official permission to do something with a resource.
   */
  LicenseDocument: new LitVocabTerm(
    _NS("LicenseDocument"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`License Document`, "en")
    .addComment(`A legal document giving official permission to do something with a resource.`, "en"),

  /**
   * A statement about the intellectual property rights (IPR) held in or over a resource, a legal document giving official permission to do something with a resource, or a statement about access rights.
   */
  RightsStatement: new LitVocabTerm(
    _NS("RightsStatement"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Rights Statement`, "en")
    .addComment(`A statement about the intellectual property rights (IPR) held in or over a resource, a legal document giving official permission to do something with a resource, or a statement about access rights.`, "en"),

  /**
   * A system of signs, symbols, sounds, gestures, or rules used in communication.
   */
  LinguisticSystem: new LitVocabTerm(
    _NS("LinguisticSystem"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Linguistic System`, "en")
    .addComment(`A system of signs, symbols, sounds, gestures, or rules used in communication.`, "en"),

  /**
   * A spatial region or named place.
   */
  Location: new LitVocabTerm(
    _NS("Location"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Location`, "en")
    .addComment(`A spatial region or named place.`, "en"),

  /**
   * A media type or extent.
   */
  MediaTypeOrExtent: new LitVocabTerm(
    _NS("MediaTypeOrExtent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Media Type or Extent`, "en")
    .addComment(`A media type or extent.`, "en"),

  /**
   * A method by which resources are added to a collection.
   */
  MethodOfAccrual: new LitVocabTerm(
    _NS("MethodOfAccrual"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Method of Accrual`, "en")
    .addComment(`A method by which resources are added to a collection.`, "en"),

  /**
   * A process that is used to engender knowledge, attitudes, and skills.
   */
  MethodOfInstruction: new LitVocabTerm(
    _NS("MethodOfInstruction"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Method of Instruction`, "en")
    .addComment(`A process that is used to engender knowledge, attitudes, and skills.`, "en"),

  /**
   * An interval of time that is named or defined by its start and end dates.
   */
  PeriodOfTime: new LitVocabTerm(
    _NS("PeriodOfTime"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Period of Time`, "en")
    .addComment(`An interval of time that is named or defined by its start and end dates.`, "en"),

  /**
   * A physical material or carrier.
   */
  PhysicalMedium: new LitVocabTerm(
    _NS("PhysicalMedium"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Physical Medium`, "en")
    .addComment(`A physical material or carrier.`, "en"),

  /**
   * A material thing.
   */
  PhysicalResource: new LitVocabTerm(
    _NS("PhysicalResource"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Physical Resource`, "en")
    .addComment(`A material thing.`, "en"),

  /**
   * A plan or course of action by an authority, intended to influence and determine decisions, actions, and other matters.
   */
  Policy: new LitVocabTerm(
    _NS("Policy"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Policy`, "en")
    .addComment(`A plan or course of action by an authority, intended to influence and determine decisions, actions, and other matters.`, "en"),

  /**
   * Any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation.
   */
  ProvenanceStatement: new LitVocabTerm(
    _NS("ProvenanceStatement"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Provenance Statement`, "en")
    .addComment(`Any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation.`, "en"),

  /**
   * A dimension or extent, or a time taken to play or execute.
   */
  SizeOrDuration: new LitVocabTerm(
    _NS("SizeOrDuration"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Size or Duration`, "en")
    .addComment(`A dimension or extent, or a time taken to play or execute.`, "en"),

  /**
   * A reference point against which other things can be evaluated or compared.
   */
  Standard: new LitVocabTerm(
    _NS("Standard"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Standard`, "en")
    .addComment(`A reference point against which other things can be evaluated or compared.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * Date on which the resource was changed.
   */
  modified: new LitVocabTerm(
    _NS("modified"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Modified`, "en")
    .addComment(`Date on which the resource was changed.`, "en"),

  /**
   * An entity responsible for making the resource available.
   */
  publisher: new LitVocabTerm(
    _NS("publisher"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Publisher`, "en")
    .addComment(`An entity responsible for making the resource available.`, "en"),

  /**
   * A name given to the resource.
   */
  title: new LitVocabTerm(
    _NS("title"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Title`, "en")
    .addComment(`A name given to the resource.`, "en"),

  /**
   * Date of formal issuance of the resource.
   */
  issued: new LitVocabTerm(
    _NS("issued"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Issued`, "en")
    .addComment(`Date of formal issuance of the resource.`, "en"),

  /**
   * The set of regions in space defined by their geographic coordinates according to the DCMI Box Encoding Scheme.
   */
  Box: new LitVocabTerm(
    _NS("Box"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`DCMI Box`, "en")
    .addComment(`The set of regions in space defined by their geographic coordinates according to the DCMI Box Encoding Scheme.`, "en"),

  /**
   * The set of codes listed in ISO 3166-1 for the representation of names of countries.
   */
  ISO3166: new LitVocabTerm(
    _NS("ISO3166"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`ISO 3166`, "en")
    .addComment(`The set of codes listed in ISO 3166-1 for the representation of names of countries.`, "en"),

  /**
   * The three-letter alphabetic codes listed in ISO639-2 for the representation of names of languages.
   */
  ISO639_2: new LitVocabTerm(
    _NS("ISO639-2"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`ISO 639-2`, "en")
    .addComment(`The three-letter alphabetic codes listed in ISO639-2 for the representation of names of languages.`, "en"),

  /**
   * The set of three-letter codes listed in ISO 639-3 for the representation of names of languages.
   */
  ISO639_3: new LitVocabTerm(
    _NS("ISO639-3"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`ISO 639-3`, "en")
    .addComment(`The set of three-letter codes listed in ISO 639-3 for the representation of names of languages.`, "en"),

  /**
   * An account of the resource.
   */
  description: new LitVocabTerm(
    _NS("description"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Description`, "en")
    .addComment(`An account of the resource.`, "en"),

  /**
   * The set of time intervals defined by their limits according to the DCMI Period Encoding Scheme.
   */
  Period: new LitVocabTerm(
    _NS("Period"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`DCMI Period`, "en")
    .addComment(`The set of time intervals defined by their limits according to the DCMI Period Encoding Scheme.`, "en"),

  /**
   * The set of points in space defined by their geographic coordinates according to the DCMI Point Encoding Scheme.
   */
  Point: new LitVocabTerm(
    _NS("Point"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`DCMI Point`, "en")
    .addComment(`The set of points in space defined by their geographic coordinates according to the DCMI Point Encoding Scheme.`, "en"),

  /**
   * The set of tags, constructed according to RFC 1766, for the identification of languages.
   */
  RFC1766: new LitVocabTerm(
    _NS("RFC1766"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`RFC 1766`, "en")
    .addComment(`The set of tags, constructed according to RFC 1766, for the identification of languages.`, "en"),

  /**
   * The set of tags constructed according to RFC 3066 for the identification of languages.
   */
  RFC3066: new LitVocabTerm(
    _NS("RFC3066"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`RFC 3066`, "en")
    .addComment(`The set of tags constructed according to RFC 3066 for the identification of languages.`, "en"),

  /**
   * The set of tags constructed according to RFC 4646 for the identification of languages.
   */
  RFC4646: new LitVocabTerm(
    _NS("RFC4646"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`RFC 4646`, "en")
    .addComment(`The set of tags constructed according to RFC 4646 for the identification of languages.`, "en"),

  /**
   * The set of tags constructed according to RFC 5646 for the identification of languages.
   */
  RFC5646: new LitVocabTerm(
    _NS("RFC5646"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`RFC 5646`, "en")
    .addComment(`The set of tags constructed according to RFC 5646 for the identification of languages.`, "en"),

  /**
   * The set of identifiers constructed according to the generic syntax for Uniform Resource Identifiers as specified by the Internet Engineering Task Force.
   */
  URI: new LitVocabTerm(
    _NS("URI"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`URI`, "en")
    .addComment(`The set of identifiers constructed according to the generic syntax for Uniform Resource Identifiers as specified by the Internet Engineering Task Force.`, "en"),

  /**
   * The set of dates and times constructed according to the W3C Date and Time Formats Specification.
   */
  W3CDTF: new LitVocabTerm(
    _NS("W3CDTF"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`W3C-DTF`, "en")
    .addComment(`The set of dates and times constructed according to the W3C Date and Time Formats Specification.`, "en"),

  /**
   * A summary of the resource.
   */
  abstract_: new LitVocabTerm(
    _NS("abstract"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Abstract`, "en")
    .addComment(`A summary of the resource.`, "en"),

  /**
   * Information about who access the resource or an indication of its security status.
   */
  accessRights: new LitVocabTerm(
    _NS("accessRights"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Access Rights`, "en")
    .addComment(`Information about who access the resource or an indication of its security status.`, "en"),

  /**
   * The method by which items are added to a collection.
   */
  accrualMethod: new LitVocabTerm(
    _NS("accrualMethod"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Accrual Method`, "en")
    .addComment(`The method by which items are added to a collection.`, "en"),

  /**
   * The frequency with which items are added to a collection.
   */
  accrualPeriodicity: new LitVocabTerm(
    _NS("accrualPeriodicity"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Accrual Periodicity`, "en")
    .addComment(`The frequency with which items are added to a collection.`, "en"),

  /**
   * The policy governing the addition of items to a collection.
   */
  accrualPolicy: new LitVocabTerm(
    _NS("accrualPolicy"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Accrual Policy`, "en")
    .addComment(`The policy governing the addition of items to a collection.`, "en"),

  /**
   * An alternative name for the resource.
   */
  alternative: new LitVocabTerm(
    _NS("alternative"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Alternative Title`, "en")
    .addComment(`An alternative name for the resource.`, "en"),

  /**
   * A class of agents for whom the resource is intended or useful.
   */
  audience: new LitVocabTerm(
    _NS("audience"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Audience`, "en")
    .addComment(`A class of agents for whom the resource is intended or useful.`, "en"),

  /**
   * Date that the resource became or will become available.
   */
  available: new LitVocabTerm(
    _NS("available"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Available`, "en")
    .addComment(`Date that the resource became or will become available.`, "en"),

  /**
   * A bibliographic reference for the resource.
   */
  bibliographicCitation: new LitVocabTerm(
    _NS("bibliographicCitation"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Bibliographic Citation`, "en")
    .addComment(`A bibliographic reference for the resource.`, "en"),

  /**
   * An established standard to which the described resource conforms.
   */
  conformsTo: new LitVocabTerm(
    _NS("conformsTo"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Conforms To`, "en")
    .addComment(`An established standard to which the described resource conforms.`, "en"),

  /**
   * An entity responsible for making contributions to the resource.
   */
  contributor: new LitVocabTerm(
    _NS("contributor"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Contributor`, "en")
    .addComment(`An entity responsible for making contributions to the resource.`, "en"),

  /**
   * The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant.
   */
  coverage: new LitVocabTerm(
    _NS("coverage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Coverage`, "en")
    .addComment(`The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant.`, "en"),

  /**
   * Date of creation of the resource.
   */
  created: new LitVocabTerm(
    _NS("created"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Created`, "en")
    .addComment(`Date of creation of the resource.`, "en"),

  /**
   * An entity responsible for making the resource.
   */
  creator: new LitVocabTerm(
    _NS("creator"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Creator`, "en")
    .addComment(`An entity responsible for making the resource.`, "en"),

  /**
   * A point or period of time associated with an event in the lifecycle of the resource.
   */
  date: new LitVocabTerm(
    _NS("date"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date`, "en")
    .addComment(`A point or period of time associated with an event in the lifecycle of the resource.`, "en"),

  /**
   * Date of acceptance of the resource.
   */
  dateAccepted: new LitVocabTerm(
    _NS("dateAccepted"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Accepted`, "en")
    .addComment(`Date of acceptance of the resource.`, "en"),

  /**
   * Date of copyright of the resource.
   */
  dateCopyrighted: new LitVocabTerm(
    _NS("dateCopyrighted"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Copyrighted`, "en")
    .addComment(`Date of copyright of the resource.`, "en"),

  /**
   * Date of submission of the resource.
   */
  dateSubmitted: new LitVocabTerm(
    _NS("dateSubmitted"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Submitted`, "en")
    .addComment(`Date of submission of the resource.`, "en"),

  /**
   * A class of agents, defined in terms of progression through an educational or training context, for which the described resource is intended.
   */
  educationLevel: new LitVocabTerm(
    _NS("educationLevel"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Audience Education Level`, "en")
    .addComment(`A class of agents, defined in terms of progression through an educational or training context, for which the described resource is intended.`, "en"),

  /**
   * The size or duration of the resource.
   */
  extent: new LitVocabTerm(
    _NS("extent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Extent`, "en")
    .addComment(`The size or duration of the resource.`, "en"),

  /**
   * The file format, physical medium, or dimensions of the resource.
   */
  format: new LitVocabTerm(
    _NS("format"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Format`, "en")
    .addComment(`The file format, physical medium, or dimensions of the resource.`, "en"),

  /**
   * A related resource that is substantially the same as the pre-existing described resource, but in another format.
   */
  hasFormat: new LitVocabTerm(
    _NS("hasFormat"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Has Format`, "en")
    .addComment(`A related resource that is substantially the same as the pre-existing described resource, but in another format.`, "en"),

  /**
   * A related resource that is included either physically or logically in the described resource.
   */
  hasPart: new LitVocabTerm(
    _NS("hasPart"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Has Part`, "en")
    .addComment(`A related resource that is included either physically or logically in the described resource.`, "en"),

  /**
   * A related resource that is a version, edition, or adaptation of the described resource.
   */
  hasVersion: new LitVocabTerm(
    _NS("hasVersion"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Has Version`, "en")
    .addComment(`A related resource that is a version, edition, or adaptation of the described resource.`, "en"),

  /**
   * An unambiguous reference to the resource within a given context.
   */
  identifier: new LitVocabTerm(
    _NS("identifier"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Identifier`, "en")
    .addComment(`An unambiguous reference to the resource within a given context.`, "en"),

  /**
   * A process, used to engender knowledge, attitudes and skills, that the described resource is designed to support.
   */
  instructionalMethod: new LitVocabTerm(
    _NS("instructionalMethod"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Instructional Method`, "en")
    .addComment(`A process, used to engender knowledge, attitudes and skills, that the described resource is designed to support.`, "en"),

  /**
   * A pre-existing related resource that is substantially the same as the described resource, but in another format.
   */
  isFormatOf: new LitVocabTerm(
    _NS("isFormatOf"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Is Format Of`, "en")
    .addComment(`A pre-existing related resource that is substantially the same as the described resource, but in another format.`, "en"),

  /**
   * A related resource in which the described resource is physically or logically included.
   */
  isPartOf: new LitVocabTerm(
    _NS("isPartOf"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Is Part Of`, "en")
    .addComment(`A related resource in which the described resource is physically or logically included.`, "en"),

  /**
   * A related resource that references, cites, or otherwise points to the described resource.
   */
  isReferencedBy: new LitVocabTerm(
    _NS("isReferencedBy"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Is Referenced By`, "en")
    .addComment(`A related resource that references, cites, or otherwise points to the described resource.`, "en"),

  /**
   * A related resource that supplants, displaces, or supersedes the described resource.
   */
  isReplacedBy: new LitVocabTerm(
    _NS("isReplacedBy"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Is Replaced By`, "en")
    .addComment(`A related resource that supplants, displaces, or supersedes the described resource.`, "en"),

  /**
   * A related resource that requires the described resource to support its function, delivery, or coherence.
   */
  isRequiredBy: new LitVocabTerm(
    _NS("isRequiredBy"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Is Required By`, "en")
    .addComment(`A related resource that requires the described resource to support its function, delivery, or coherence.`, "en"),

  /**
   * A related resource of which the described resource is a version, edition, or adaptation.
   */
  isVersionOf: new LitVocabTerm(
    _NS("isVersionOf"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Is Version Of`, "en")
    .addComment(`A related resource of which the described resource is a version, edition, or adaptation.`, "en"),

  /**
   * A language of the resource.
   */
  language: new LitVocabTerm(
    _NS("language"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Language`, "en")
    .addComment(`A language of the resource.`, "en"),

  /**
   * A legal document giving official permission to do something with the resource.
   */
  license: new LitVocabTerm(
    _NS("license"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`License`, "en")
    .addComment(`A legal document giving official permission to do something with the resource.`, "en"),

  /**
   * An entity that mediates access to the resource.
   */
  mediator: new LitVocabTerm(
    _NS("mediator"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Mediator`, "en")
    .addComment(`An entity that mediates access to the resource.`, "en"),

  /**
   * The material or physical carrier of the resource.
   */
  medium: new LitVocabTerm(
    _NS("medium"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Medium`, "en")
    .addComment(`The material or physical carrier of the resource.`, "en"),

  /**
   * A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity, and interpretation.
   */
  provenance: new LitVocabTerm(
    _NS("provenance"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Provenance`, "en")
    .addComment(`A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity, and interpretation.`, "en"),

  /**
   * A related resource that is referenced, cited, or otherwise pointed to by the described resource.
   */
  references: new LitVocabTerm(
    _NS("references"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`References`, "en")
    .addComment(`A related resource that is referenced, cited, or otherwise pointed to by the described resource.`, "en"),

  /**
   * A related resource.
   */
  relation: new LitVocabTerm(
    _NS("relation"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Relation`, "en")
    .addComment(`A related resource.`, "en"),

  /**
   * A related resource that is supplanted, displaced, or superseded by the described resource.
   */
  replaces: new LitVocabTerm(
    _NS("replaces"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Replaces`, "en")
    .addComment(`A related resource that is supplanted, displaced, or superseded by the described resource.`, "en"),

  /**
   * A related resource that is required by the described resource to support its function, delivery, or coherence.
   */
  requires: new LitVocabTerm(
    _NS("requires"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Requires`, "en")
    .addComment(`A related resource that is required by the described resource to support its function, delivery, or coherence.`, "en"),

  /**
   * Information about rights held in and over the resource.
   */
  rights: new LitVocabTerm(
    _NS("rights"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Rights`, "en")
    .addComment(`Information about rights held in and over the resource.`, "en"),

  /**
   * A person or organization owning or managing rights over the resource.
   */
  rightsHolder: new LitVocabTerm(
    _NS("rightsHolder"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Rights Holder`, "en")
    .addComment(`A person or organization owning or managing rights over the resource.`, "en"),

  /**
   * A related resource from which the described resource is derived.
   */
  source: new LitVocabTerm(
    _NS("source"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Source`, "en")
    .addComment(`A related resource from which the described resource is derived.`, "en"),

  /**
   * Spatial characteristics of the resource.
   */
  spatial: new LitVocabTerm(
    _NS("spatial"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Spatial Coverage`, "en")
    .addComment(`Spatial characteristics of the resource.`, "en"),

  /**
   * A topic of the resource.
   */
  subject: new LitVocabTerm(
    _NS("subject"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Subject`, "en")
    .addComment(`A topic of the resource.`, "en"),

  /**
   * A list of subunits of the resource.
   */
  tableOfContents: new LitVocabTerm(
    _NS("tableOfContents"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Table Of Contents`, "en")
    .addComment(`A list of subunits of the resource.`, "en"),

  /**
   * Temporal characteristics of the resource.
   */
  temporal: new LitVocabTerm(
    _NS("temporal"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Temporal Coverage`, "en")
    .addComment(`Temporal characteristics of the resource.`, "en"),

  /**
   * The nature or genre of the resource.
   */
  type: new LitVocabTerm(
    _NS("type"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Type`, "en")
    .addComment(`The nature or genre of the resource.`, "en"),

  /**
   * Date (often a range) of validity of a resource.
   */
  valid: new LitVocabTerm(
    _NS("valid"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Date Valid`, "en")
    .addComment(`Date (often a range) of validity of a resource.`, "en"),

};

export { DCTERMS };