import React from "react";
import { useParams } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer, commitMutation } from "react-relay";
import PackageForm from "./PackageForm";
import environment from "../Services/Relay/environment";

const EditPackage = () => {
  const { id } = useParams();

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
      mutation EditPackageMutation(
        $_set: package_set_input!
        $pk_columns: package_pk_columns_input!
      ) {
        update_package_by_pk(_set: $_set, pk_columns: $pk_columns) {
          packageId
          name
          price
          duration
          validity
          description
        }
      }
    `;

    let updateResponse;
    const updatedPackage = { duration, validity, description, name, price };
    try {
      updateResponse = await new Promise((resolve, reject) =>
        commitMutation(environment, {
          mutation,
          variables: {
            pk_columns: { packageId: id },
            _set: updatedPackage,
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
      setMessage("Failed to update entry!");
      setMessageType("danger");
      return false;
    }

    setMessage(
      `Package item #${updateResponse.update_package_by_pk.packageId} saved successfully.`
    );
    setMessageType("success");
    return true;
  };

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EditPackageQuery($packageId: Int!) {
          package_by_pk(packageId: $packageId) {
            _id: packageId
            name
            price
            duration
            validity
            description
          }
        }
      `}
      variables={{ packageId: id }}
      render={({ error, props }) => {
        if (error) {
          console.error(error);
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        const {
          price,
          name,
          duration,
          validity,
          description,
        } = props.package_by_pk;
        return (
          <PackageForm
            title="Edit Package Item"
            onSubmit={onSubmit}
            duration={duration}
            validity={validity}
            description={description}
            name={name}
            price={price.substr(1)}
          />
        );
      }}
    />
  );
};

export default EditPackage;
