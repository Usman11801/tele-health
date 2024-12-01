import { useEffect, useRef } from 'react';

const OtpScreen = () => {
  const inputsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const inputs = inputsRef.current;
    const form = formRef.current;
    const submit = form.querySelector('button[type=submit]');

    const handleKeyDown = (e) => {
      if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
        e.preventDefault();
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = inputs.indexOf(e.target);
        if (index > 0) {
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const { target } = e;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          submit.focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text');
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split('');
      inputs.forEach((input, index) => (input.value = digits[index]));
      submit.focus();
    };

    inputs.forEach((input) => {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeyDown);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('paste', handlePaste);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('input', handleInput);
        input.removeEventListener('keydown', handleKeyDown);
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('paste', handlePaste);
      });
    };
  }, []);

  return (
    <div className="bg-white ">
      <header className="mb-8">
        {/* <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1> */}
        <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your Email.</p>
      </header>
      <div>
      <form ref={formRef} id="otp-form">
        <div style={{display:'flex',justifyContent:'center'}} className="flex gap-3 justify-center">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              style={{width:'18%'}}
              className=" text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 rounded p-3 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              maxLength="1"
              ref={(el) => (inputsRef.current[i] = el)}
            />
          ))}
        </div>
        {/* <div className="max-w-[260px] mx-auto mt-4">
          <button
           
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div> */}
        <div className="col-lg-12">
                        <div className="text-center">
                          <button style={{marginTop:'3%'}}  type="submit"  className="btn signup-btn">
                          Verify Account
                          </button>

                        </div>
                      </div>
      </form>
      </div>
      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{' '}
        <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
          Resend
        </a>
      </div>
    </div>
  );
};

export default OtpScreen;
