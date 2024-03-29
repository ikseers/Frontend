import RegisterContainer from '../register/AuthContainer';
import ConfirmPin from './ConfirmPin';
import '../register/register.css';

export default function ConfirmPinCode() {
  return (
    <div className="pt-10 auth-parent">
      <RegisterContainer>
        <ConfirmPin />
      </RegisterContainer>
    </div>
  );
}
