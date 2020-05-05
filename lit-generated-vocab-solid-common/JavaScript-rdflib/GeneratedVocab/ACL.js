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
 */

const RDFLIB_NAMESPACE = new $rdf.Namespace("http://www.w3.org/ns/auth/acl#");

const _NAMESPACE = "http://www.w3.org/ns/auth/acl#";
function _NS (localName) {
  return (_NAMESPACE + localName);
}

const ACL = {
  PREFIX: "acl",
  NAMESPACE: _NAMESPACE,
  PREFIX_AND_NAMESPACE: { "acl": "http://www.w3.org/ns/auth/acl#" },
  NS: _NS,

    // *****************
    // All the Classes.
    // *****************

    /**
     * Any kind of access to a resource. Don't use this, use R W and RW
     */
    Access: $rdf.sym(_NS("Access")),

    /**
     * Append accesses are specific write access which only add information, and do not remove information.
    For text files, for example, append access allows bytes to be added onto the end of the file.
    For RDF graphs, Append access allows adds triples to the graph but does not remove any.
    Append access is useful for dropbox functionality.
    Dropbox can be used for link notification, which the information added is a notification
    that a some link has been made elsewhere relevant to the given resource.
    
     */
    Append: $rdf.sym(_NS("Append")),

    /**
     * write
     */
    Write: $rdf.sym(_NS("Write")),

    /**
     * A class of agents who have been authenticated.
In other words, anyone can access this resource, but not anonymously.
The social expectation is that the authentication process will provide an
identify and a name, or pseudonym.
(A new ID should not be minted for every access: the intent is that the user
is able to continue to use the ID for continues interactions with peers,
and for example to develop a reputation)

     */
    AuthenticatedAgent: $rdf.sym(_NS("AuthenticatedAgent")),

    /**
     * An element of access control,
    allowing agent to agents access of some kind to resources or classes of resources
     */
    Authorization: $rdf.sym(_NS("Authorization")),

    /**
     * Allows read/write access to the ACL for the resource(s)
     */
    Control: $rdf.sym(_NS("Control")),

    /**
     * An Origin is basically a web site
        (Note WITHOUT the trailing slash after the domain name and port in its URI)
        and is the basis for controlling access to data by web apps
        in the Same Origin Model of web security.
        All scripts from the same origin are given the same right.
     */
    Origin: $rdf.sym(_NS("Origin")),

    /**
     * The class of read operations
     */
    Read: $rdf.sym(_NS("Read")),

    // *******************
    // All the Properties.
    // *******************

    /**
     * The Access Control file for this information resource.
        This may of course be a virtual resource implemented by the access control system.
        Note also HTTP's header  Link:  foo.meta ;rel=meta can be used for this.
     */
    accessControl: $rdf.sym(_NS("accessControl")),

    /**
     * The information resource to which access is being granted.
     */
    accessTo: $rdf.sym(_NS("accessTo")),

    /**
     * A class of information resources to which access is being granted.
     */
    accessToClass: $rdf.sym(_NS("accessToClass")),

    /**
     * A person or social entity to being given the right
     */
    agent: $rdf.sym(_NS("agent")),

    /**
     * A class of persons or social entities to being given the right
     */
    agentClass: $rdf.sym(_NS("agentClass")),

    /**
     * A group of persons or social entities to being given the right.
          The right is given to any entity which is a vcard:member of the group,
          as defined by the document received when the Group is dereferenced.
     */
    agentGroup: $rdf.sym(_NS("agentGroup")),

    /**
     * If a resource has no ACL file (it is 404),
        then access to the resource if given by the ACL of the immediately
        containing directory, or failing that (404) the ACL of the recursively next
        containing directory which has an ACL file.
        Within that ACL file,
        any Authentication which has that directory as its acl:default applies to the
        resource. (The highest directory must have an ACL file.)

     */
    default_: $rdf.sym(_NS("default")),

    /**
     * THIS IS OBSOLETE AS OF 2017-08-01.   See 'default'.
        Was: A directory for which this authorization is used for new files in the directory.
     */
    defaultForNew: $rdf.sym(_NS("defaultForNew")),

    /**
     * Delegates a person or another agent to act on behalf of the agent.
    For example, Alice delegates Bob to act on behalf of Alice for ACL purposes.
     */
    delegates: $rdf.sym(_NS("delegates")),

    /**
     * A mode of access such as read or write.
     */
    mode: $rdf.sym(_NS("mode")),

    /**
     * A web application, identified by its Origin, such as
        <https://scripts.example.com>, being given the right.
        When a user of the web application at a certain origin accesses the server,
        then the browser sets the Origin: header to warn that a possibly untrusted webapp
        is being used.
        Then, BOTH the user AND the origin must have the required access.
     */
    origin: $rdf.sym(_NS("origin")),

    /**
     * The person or other agent which owns this.
    For example, the owner of a file in a filesystem.
    There is a sense of right to control.   Typically defaults to the agent who craeted
    something but can be changed.
     */
    owner: $rdf.sym(_NS("owner")),

  //
  // Marker allowing us put commas at the end of all lines above (only the last line does not have a comma).
  //
  END_OF_VOCAB: "End of vocab."
}

module.exports = ACL;
