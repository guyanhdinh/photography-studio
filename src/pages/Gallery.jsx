import React, { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getAllPhotos } from "../firebase";

export function loader() {
  return defer({ photos: getAllPhotos() });
}

function Gallery() {
  const columnStyles = {
    padding: "0px 4px"
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const dataPromise = useLoaderData();

  function renderPhotoElements(photos) {
    const displayedPhotos = typeFilter
      ? photos.filter((photo) => photo.type === typeFilter)
      : photos;

    const photoElements = displayedPhotos.map((photo) => (
      <div className="column" style={columnStyles}>
        <img src={photo.imageUrl} alt={`Pic of ${photo.type}`} />
      </div>
    ));

    function handleFilterChange(key, value) {
      setSearchParams((prevParams) => {
        if (value === null) {
          prevParams.delete(key);
        } else {
          prevParams.set(key, value);
        }
        return prevParams;
      });
    }
    return (
      <>
        <div className="photo-list-filter-buttons">
          <button
            onClick={() => handleFilterChange("type", "portrait")}
            className={`photo-type portrait ${
              typeFilter === "portrait" ? "selected" : ""
            }`}
          >
            Portrait
          </button>
          <button
            onClick={() => handleFilterChange("type", "wedding")}
            className={`photo-type wedding ${
              typeFilter === "wedding" ? "selected" : ""
            }`}
          >
            Wedding
          </button>
          <button
            onClick={() => handleFilterChange("type", "graduation")}
            className={`photo-type graduation ${
              typeFilter === "graduation" ? "selected" : ""
            }`}
          >
            Graduation
          </button>
          <button
            onClick={() => handleFilterChange("type", "family")}
            className={`photo-type family ${
              typeFilter === "family" ? "selected" : ""
            }`}
          >
            Family
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="photo-type clear-filters"
            >
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="row">{photoElements}</div>
      </>
    );
  }

  return (
    <Suspense fallback={<h2>Loading photos...</h2>}>
      <Await resolve={dataPromise.photos}>{renderPhotoElements}</Await>
    </Suspense>
  );
}

export default Gallery;
