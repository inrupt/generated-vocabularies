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

  Consent vocabulary defining LIT-specific terms, especially terms that provide context
 */

function _NS(localName: string) { 
  return (namedNode("https://w3id.org/lit/vocab/consent#" + localName));
}

const LIT_CONSENT = {
  PREFIX: "lit_consent",
  NAMESPACE: "https://w3id.org/lit/vocab/consent#",
  PREFIX_AND_NAMESPACE: { "lit_consent": "https://w3id.org/lit/vocab/consent#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * A ThirdPartyDataController is a Third Party entity that acts as a Data Controller
   */
  Controller: new LitVocabTerm(
    _NS("Controller"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Controller`, "en")
    .addComment(`A ThirdPartyDataController is a Third Party entity that acts as a Data Controller`, "en"),

  /**
   * Consent container (which is a collection of Consent occurances).
   */
  ConsentContainer: new LitVocabTerm(
    _NS("ConsentContainer"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Consent Container`, "en")
    .addComment(`Consent container (which is a collection of Consent occurances).`, "en"),

  /**
   * The class of applications that are considered to make up the entire Project eco-system, as developed by
Company. Project can consist of a number of applications (e.g. a registration app, a reporting tool, a personal
data manager app).
   */
  ProjectApp: new LitVocabTerm(
    _NS("ProjectApp"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Project Applications`, "en")
    .addCommentNoLanguage(`The class of applications that are considered to make up the entire Project eco-system, as developed by
Company. Project can consist of a number of applications (e.g. a registration app, a reporting tool, a personal
data manager app).`),

  /**
   * The Project registration app (currently native Android app only).
   */
  app_pam_registration_android: new LitVocabTerm(
    _NS("app_pam_registration_android"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Project Registration`, "en")
    .addComment(`The Project registration app (currently native Android app only).`, "en"),

  /**
   * The Project reporting webapp, which provides high-level analysis of the Project eco-system).
   */
  app_pam_reporting_web: new LitVocabTerm(
    _NS("app_pam_reporting_web"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Project Reporting`, "en")
    .addComment(`The Project reporting webapp, which provides high-level analysis of the Project eco-system).`, "en"),

  /**
   * The Project Personal Data Manager webapp, used by individuals to manage their profiles.
   */
  app_pam_personal_web: new LitVocabTerm(
    _NS("app_pam_personal_web"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Project Personal`, "en")
    .addComment(`The Project Personal Data Manager webapp, used by individuals to manage their profiles.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * Property stating the default expiry period (in months) for consent. This value may be
 overridden in many scenarios, but is useful for providing a default.
   */
  defaultConsentExpiryMonths: new LitVocabTerm(
    _NS("defaultConsentExpiryMonths"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Default Consent Expiry (Months)`, "en")
    .addComment(`Property stating the default expiry period (in months) for consent. This value may be
 overridden in many scenarios, but is useful for providing a default.`, "en"),

  /**
   * Should be in a more authoritative vocab... Provides a convenient link directly to the Data
 Controller responsible for collecting and managing personal data in a consent context.
   */
  hasController: new LitVocabTerm(
    _NS("hasController"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Has Controller`, "en")
    .addComment(`Should be in a more authoritative vocab... Provides a convenient link directly to the Data
 Controller responsible for collecting and managing personal data in a consent context.`, "en"),

  /**
   * (Should propose adding to GConsent vocab) Property linking back to the Consent that the current
 Consent replaces. It's necessary to complete replace a Consent object when the data subject changes the Purpose (e.g.
 removes the Sharing action) or changes the structure of the personal data being consented (e.g. such as a new field
 being added).
   */
  replacesConsent: new LitVocabTerm(
    _NS("replacesConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Replaces Consent`, "en")
    .addComment(`(Should propose adding to GConsent vocab) Property linking back to the Consent that the current
 Consent replaces. It's necessary to complete replace a Consent object when the data subject changes the Purpose (e.g.
 removes the Sharing action) or changes the structure of the personal data being consented (e.g. such as a new field
 being added).`, "en"),

  /**
   * (Should propose adding to GConsent vocab) Property linking an old Consent to the Consent
 that replaces it. It's necessary to complete replace a Consent object when the data subject changes the Purpose (e.g.
 removes the Sharing action) or changes the structure of the personal data being consented (e.g. such as a new field
 being added).
   */
  wasReplacedByConsent: new LitVocabTerm(
    _NS("wasReplacedByConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Was Replaced By Consent`, "en")
    .addComment(`(Should propose adding to GConsent vocab) Property linking an old Consent to the Consent
 that replaces it. It's necessary to complete replace a Consent object when the data subject changes the Purpose (e.g.
 removes the Sharing action) or changes the structure of the personal data being consented (e.g. such as a new field
 being added).`, "en"),

  /**
   * Property linking a user's profile (which can contain personal data or non-personal data) to it's current Consent.
   */
  profileContainsConsent: new LitVocabTerm(
    _NS("profileContainsConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Profile Contains Consent`, "en")
    .addComment(`Property linking a user's profile (which can contain personal data or non-personal data) to it's current Consent.`, "en"),

  /**
   * Should be in GConsent...Provides a convenient link directly to the last ConsentInstance in the
 chain (rather than having to traverse the linked list, or querying for 'most recent').
   */
  latestConsentInstance: new LitVocabTerm(
    _NS("latestConsentInstance"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Should be in GConsent...`, "en")
    .addComment(`Should be in GConsent...Provides a convenient link directly to the last ConsentInstance in the
 chain (rather than having to traverse the linked list, or querying for 'most recent').`, "en"),

  /**
   * Property linking a consent with it's container.
   */
  hasConsentContainer: new LitVocabTerm(
    _NS("hasConsentContainer"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Has Consent Container`, "en")
    .addComment(`Property linking a consent with it's container.`, "en"),

  /**
   * The WebID of the individual that captured or
 obtained this instance of consent.
   */
  capturedByWebId: new LitVocabTerm(
    _NS("capturedByWebId"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`WebID of entity capturing consent`, "en")
    .addCommentNoLanguage(`The WebID of the individual that captured or
 obtained this instance of consent.`),

  /**
   * The WebID of the entity that captured this consent instance.
   */
  isWebIdThatCapturedGivenConsent: new LitVocabTerm(
    _NS("isWebIdThatCapturedGivenConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`is WebID of entity that captured this consent`, "en")
    .addComment(`The WebID of the entity that captured this consent instance.`, "en"),

  /**
   * The WebID of the organisation (e.g. an NGO, a mobile operator, a merchant, etc.) that captured or
 obtained this instance of consent.
   */
  capturedByOrganisationWebId: new LitVocabTerm(
    _NS("capturedByOrganisationWebId"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`WebID of the organization capturing/obtaining consent`, "en")
    .addCommentNoLanguage(`The WebID of the organisation (e.g. an NGO, a mobile operator, a merchant, etc.) that captured or
 obtained this instance of consent.`),

  /**
   * The WebID of the organisation that captured this consent instance.
   */
  isOrganisationWebIdThatCapturedGivenConsent: new LitVocabTerm(
    _NS("isOrganisationWebIdThatCapturedGivenConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`WebID of organisation that captured this consent`, "en")
    .addComment(`The WebID of the organisation that captured this consent instance.`, "en"),

  /**
   * Links the captured/obtained consent with the specific application used.
   */
  capturedThroughApplication: new LitVocabTerm(
    _NS("capturedThroughApplication"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Captured through application`, "en")
    .addComment(`Links the captured/obtained consent with the specific application used.`, "en"),

  /**
   * Links the application object to the consent instances obtained using it.
   */
  isApplicationForGivenConsent: new LitVocabTerm(
    _NS("isApplicationForGivenConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`is Application For Given Consent`, "en")
    .addComment(`Links the application object to the consent instances obtained using it.`, "en"),

  /**
   * Links the captured/obtained consent with the specific version of web form filled-in by the user.
   */
  capturedThroughWebForm: new LitVocabTerm(
    _NS("capturedThroughWebForm"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`capturedThroughWebForm`, "en")
    .addComment(`Links the captured/obtained consent with the specific version of web form filled-in by the user.`, "en"),

  /**
   * Links the Web Form object to the consent instances obtained using it.
   */
  isWebFormForGivenConsent: new LitVocabTerm(
    _NS("isWebFormForGivenConsent"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`isWebFormForGivenConsent`, "en")
    .addComment(`Links the Web Form object to the consent instances obtained using it.`, "en"),

  /**
   * Project Web form used to gather registration data for an individual.
   */
  webFormRegistration: new LitVocabTerm(
    _NS("webFormRegistration"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Registration Web Form on Project system`, "en")
    .addComment(`Project Web form used to gather registration data for an individual.`, "en"),

};

export { LIT_CONSENT };
