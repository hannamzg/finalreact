import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../components/services/cardService";

const DeleteCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      navigate("/my-cards");
    };

    deleteCard();
  }, []);

  return null;
};

export default DeleteCard;