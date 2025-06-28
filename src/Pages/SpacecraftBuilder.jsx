import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import ShipContext from "../Contexts/ShipContext";
import { useNavigate } from "react-router-dom";

export default function SpaceCraftBuilder() {
  const { addShip } = useContext(ShipContext);
  let navigate = useNavigate();

  const INITIAL_STATE = {
    name: "",
    capacity: "",
    description: "",
    image_URL: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const updatedForm = {
        ...prevFormData,
        [name]: value,
      };

      setIsInvalid(
        !updatedForm.name ||
          !updatedForm.capacity ||
          !updatedForm.description ||
          !updatedForm.image_URL
      );

      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    const isMissingInfo =
      !formData.name ||
      !formData.capacity ||
      !formData.description ||
      !formData.image_URL;

    if (isMissingInfo) {
      alert("Missing information required!");
      setIsInvalid(true);
      return;
    }

    addShip({ id: nanoid(), ...formData });
    setFormData(INITIAL_STATE);
    console.log("FormData:", formData);
    setIsInvalid(true);
    navigate("/spacecrafts");
  };

  return (
    <div>
      <button className="backBtn" onClick={() => navigate(-1)}>
        Back
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="input"
          id="capacity"
          type="text"
          name="capacity"
          placeholder="Capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
        <textarea
          className="textarea"
          id="desc"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          className="input"
          id="image_URL"
          type="text"
          name="image_URL"
          placeholder="Image URL"
          value={formData.image_URL}
          onChange={handleChange}
        />
        <br />
        <button className="buildBtn" type="submit">
          Build!
        </button>
      </form>
    </div>
  );
}
