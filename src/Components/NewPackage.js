import React from "react";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import PackageForm from "./PackageForm";
import environment from "../Services/Relay/environment";

const NewPackage = () => {
  const onSubmit = async ({
    event,
    duration,
    validity,
    description,
    name,
    price,
    message,
    setMessage,
    messageType,
    setMessageType,
  }) => {
    event.preventDefault();

    const mutation = graphql`
      mutation NewPackageMutation($object: package_insert_input!) {
        insert_package_one(object: $object) {
          packageId
          name
          duration
          validity
          description
          price
        }
      }
    `;

    let insertResponse;
    try {
      insertResponse = await new Promise((resolve, reject) =>
        commitMutation(environment, {
          mutation,
          variables: {
            object: { duration, validity, description, name, price },
          },
          onCompleted: (response, errors) => {
            if (errors) {
              reject(errors);
            }
            resolve(response);
          },
          onError: (err) => reject(err),
        })
      );
    } catch (e) {
      console.error(e);
      setMessage("Failed to insert new entry!");
      setMessageType("danger");
      return false;
    }

    setMessage(
      `Package item #${insertResponse.insert_package_one.packageId} saved successfully.`
    );
    setMessageType("success");
    return true;
  };

  return <PackageForm title="Add Package Item" onSubmit={onSubmit} />;
};

export default NewPackage;
