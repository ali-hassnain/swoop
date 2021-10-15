import { useGlobalContext } from "../components/context";

function ValidateInfo() {
  const { userData } = useGlobalContext();
  let errors = {};

  if (!userData.category) {
    errors.category = "Please select a category";
  }

  if (userData.startDate === userData.endDate) {
    errors.date =
      "Please provide correct dates for the time period you want your product to be uploaded.";
  }

  if (!userData.name.trim()) {
    errors.name = "Please Provide your name";
  }

  if (!userData.title.trim()) {
    errors.title = "Please Provide the title of your product!";
  }

  if (!userData.description.trim()) {
    errors.description = "Please Provide your description";
  }

  if (!userData.price_perday) {
    errors.price_perday = "Please Provide the price of your product";
  }

  if (!userData.deposit) {
    errors.deposit = "Please Provide your deposit";
  }
  if (!userData.imagesArray) {
    errors.imagesArray = "Please provide images for the Product!";
  }

  return errors;
}

export default ValidateInfo();
