"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <div className="eyebrow">ENQUIRY READY</div>
        <h3>Your enquiry is prepared.</h3>
        <p>
          This preview does not transmit or store your information. In a production site, this form should be connected to the clinic&apos;s chosen booking, email or CRM workflow.
        </p>
        <button className="cta" type="button" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="mm-form" onSubmit={handleSubmit}>
      <div className="mm-form-grid">
        <label className="mm-field">Name<input name="name" required placeholder="Your name" /></label>
        <label className="mm-field">Phone<input name="phone" required inputMode="tel" placeholder="Your number" /></label>
        <label className="mm-field full">Main concern
          <select name="concern" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Back or neck pain</option>
            <option>Sports injury</option>
            <option>Post-surgical recovery</option>
            <option>Knee or joint pain</option>
            <option>Shoulder problem</option>
            <option>Posture / workplace pain</option>
            <option>Neurological rehabilitation</option>
            <option>Other</option>
          </select>
        </label>
        <label className="mm-field full">Message<textarea name="message" placeholder="Briefly tell us what has been bothering you." /></label>
      </div>
      <label className="consent-row"><input type="checkbox" required name="privacyConsent" /> <span>I agree that Motion &amp; Mend may use the information I submit to respond to this enquiry. I have read the <Link href="/privacy">Privacy Notice</Link>.</span></label><button className="mm-submit" type="submit">Prepare my enquiry →</button>
      <p className="form-note">Preview form — submissions are not sent anywhere yet.</p>
    </form>
  );
}
