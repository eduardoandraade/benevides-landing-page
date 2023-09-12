import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WppButton.css'; // Se você quiser adicionar estilos personalizados

const WhatsAppButton = () => {

  const openWhatsApp = () => {
    const phoneNumber = '+5585997295133';
    const message = encodeURIComponent('Olá! Quero saber mais sobre a consultoria fitness.');
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`

    window.open(url, '_blank');
    
  };

  return (
    <div className='whatsapp-button' onClick={openWhatsApp}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default WhatsAppButton;
