import React from 'react'
import { TagsSelect } from "react-select-material-ui";

const tags = [
  "Musica",
  "Memes",
  "Admin",
  "Moderacion",
  "Imagenes",
];

const TagsSelects = () => {

  const handleChange = (values) => {
        console.log(values);
    };

  /* const handleUpdate = (event) => {
      post(`${updateUrl  }/${  id}`, values, (data) => {
        }, function (response) {

        })
  }; */

  return (
    <div>
      <TagsSelect
        variant="outlined"
        label="Tags"
        options={tags}
       /*  values={values} */
        onChange={handleChange}
        SelectProps={{
          msgNoOptionsAvailable: "All tags are selected",
          msgNoOptionsMatchFilter: "No tag matches the filter",
        }}
    />
    </div>
  )
}

export default TagsSelects
