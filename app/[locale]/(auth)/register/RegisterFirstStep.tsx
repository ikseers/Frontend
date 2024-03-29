'use client';

// Main
import { Link } from '@/navigation';
import { useForm } from 'react-hook-form';

// Components
import AuthButton from '@/components/Buttons/Button';
import DividerText from '@/components/Divider/Divider';
import AuthShape from '@/components/ThridParthAuth/ThridPartyAuth';
import AuthTextField from '@/components/InputField/InputField';
import Radio from '@/components/Radio/Radio';

// Hooks
import { useRegister } from '@/customHooks/Auth/useRegister';

// Icons & Images
import Google from '@/images/auth/Google.svg';
import Facebook from '@/images/auth/Facebook.svg';
import { LuMail } from 'react-icons/lu';
import { LuKeyRound } from 'react-icons/lu';
import { LuUser } from 'react-icons/lu';

// CSS
import './register.css';

// Interface
interface RegisterMainDataType {
  firstStepKeys: string[];
}
interface formDataType {
  username: string;
  user_email: string;
  first_name: string;
  last_name: string;
  password: string;
  gender: string;
}

export default function RegisterMainData({
  firstStepKeys,
}: RegisterMainDataType) {
  const { register, handleSubmit, formState } = useForm<formDataType>();
  const { errors } = formState;

  const { mutate } = useRegister();

  const handleLoginSubmit = (data: formDataType) => {
    mutate(data);
  };

  const firstNameObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
    maxLength: {
      value: 20,
      message: 'maxlenght is 20 characters',
    },
  };
  const lastNameObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
    maxLength: {
      value: 20,
      message: 'maxlenght is 20 characters',
    },
  };
  // didn't tranlate yet.
  const emailObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Enter a valid email',
    },
  };

  const userObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
    maxLength: {
      value: 30,
      message: 'maxlenght is 30 characters',
    },
  };
  // didn't tranlate yet.
  const passwordObject = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
    minLength: {
      value: 8,
      message: 'minlenght is 8 characters',
    },
    maxLength: {
      value: 20,
      message: 'maxlenght is 20 characters',
    },
  };

  const GenderOjbect = {
    required: {
      value: true,
      message: firstStepKeys[15],
    },
  };
  const welcomeMessage = firstStepKeys[0];
  const TextFieldName = [
    [firstStepKeys[1], 'first_name', firstNameObject],
    [firstStepKeys[2], 'last_name', lastNameObject],
  ] as const;

  // icon, placeholder, id, object
  const TextFieldOther = [
    [<LuMail key="user_email" />, firstStepKeys[3], 'user_email', emailObject],
    [<LuUser key="username" />, firstStepKeys[4], 'username', userObject],
    [
      <LuKeyRound key="password" />,
      firstStepKeys[5],
      'password',
      passwordObject,
    ],
  ] as const;

  const radioList = [
    firstStepKeys[6],
    firstStepKeys[7],
    firstStepKeys[8],
  ] as const;
  const txt0 = firstStepKeys[9];
  const txt1 = firstStepKeys[10];
  const txt2 = firstStepKeys[11];
  const txt3 = firstStepKeys[12];

  const authShape = [
    [Google, firstStepKeys[13]],
    [Facebook, firstStepKeys[14]],
  ];
  console.log(errors);

  return (
    <>
      <form
        className="flex items-center justify-center flex-col rounded-lg"
        autoComplete="off"
        onSubmit={handleSubmit(handleLoginSubmit)}
        data-hs-stepper
        noValidate
      >
        <h1 className="pt-5 text-2xl font-bold">{welcomeMessage}</h1>
        <div className="w-3/4 mt-5">
          <div className="grid grid-cols-2 gap-5">
            {TextFieldName.map((textField, indx) => (
              <AuthTextField
                key={`${textField} - ${indx}`}
                placeholder={textField[0] as string}
                id={textField[1] as string}
                register={register}
                errors={errors}
                object={textField[2] as object}
              />
            ))}
          </div>
          {TextFieldOther.map((textField, indx) => (
            <AuthTextField
              key={`${textField[2]} - ${indx}`}
              Icon={textField[0]}
              placeholder={textField[1] as string}
              id={textField[2] as string}
              register={register}
              errors={errors}
              object={textField[3] as object}
            />
          ))}

          <div>
            <div className="flex gap-x-6">
              {radioList.map((e) => (
                <Radio
                  key={e}
                  text={e}
                  register={register}
                  object={GenderOjbect}
                />
              ))}
            </div>
            <p
              className={`ml-2 text-xs font-normal text-red-500 dark:text-red-600 ${
                errors.gender && errors.gender.message ? '' : 'invisible'
              }`}
            >
              {errors.gender && errors.gender.message
                ? errors.gender.message
                : 'Input Validation'}
            </p>
          </div>
        </div>

        <AuthButton
          title={txt0}
          width="75%"
          height="42px"
          data-hs-stepper-next-btn
        />

        <section className="w-3/4">
          <span>{txt1} </span>
          <Link href="/login" style={{ color: '#0B9992', fontWeight: '600' }}>
            {txt2}
          </Link>
        </section>
        <DividerText text={txt3} />
        <div className="grid grid-cols-2 w-full px-4 gap-2">
          {authShape.map((shape, indx) => (
            <AuthShape key={indx} authImage={shape[0]} text={shape[1]} />
          ))}
        </div>
      </form>
    </>
  );
}
