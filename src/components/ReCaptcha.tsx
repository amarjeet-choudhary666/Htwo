import ReCAPTCHA from 'react-google-recaptcha';
import { forwardRef } from 'react';

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
  theme?: 'light' | 'dark';
  size?: 'compact' | 'normal' | 'invisible';
}

const ReCaptcha = forwardRef<ReCAPTCHA, ReCaptchaProps>(
  ({ onChange, onExpired, onError, theme = 'light', size = 'normal' }, ref) => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeCH-MrAAAAABDwoorWabto4QP8qm80PW_H2ABZ';

    return (
      <div className="flex justify-center my-4">
        <ReCAPTCHA
          ref={ref}
          sitekey={siteKey}
          onChange={onChange}
          onExpired={onExpired}
          onError={onError}
          theme={theme}
          size={size}
        />
      </div>
    );
  }
);

ReCaptcha.displayName = 'ReCaptcha';

export default ReCaptcha;