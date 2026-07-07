import React from 'react'

export default function PrivacyPage() {
  return (
    <div className='p-8 flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col items-start justify-center max-w-[600px]'>
        <h1 className='text-2xl sm:text-4xl text-center font-bold w-full mb-8'>Privacy Policy</h1>

        <h2>This privacy policy applies to the Dry Calculator app for mobile devices and web browsers, together with any related services operated by Vilem McKael (collectively, the "Application"). Vilem McKael is hereby referred to as the "Service Provider."</h2>

        <div className='sectionHeader'>Summary</div>

        <p>Dry Calculator does not collect, store, or share personal data through normal use. All calculations and saved data stay on your device. The only information the Service Provider ever receives is what you choose to send through the in-app feedback form.</p>

        <div className='sectionHeader'>Information the Application Does Not Collect</div>

        <p>The Application does not require registration or an account, does not use analytics or advertising, does not use cookies or tracking technologies, and does not collect your location. Calculator inputs, saved drafts, and session data are stored locally on your device and are not transmitted to the Service Provider.</p>

        <div className='sectionHeader'>Network Activity</div>

        <p>The Application fetches drop-rate data from the Old School RuneScape Wiki API (oldschool.runescape.wiki) to populate calculators. As with any internet request, this transmits your device's IP address to the Wiki's host as a technical necessity of connecting. The Service Provider does not collect, log, or retain this information, and it is not used to identify or track you.</p>

        <div className='sectionHeader'>Feedback You Submit</div>

        <p>If you use the in-app feedback form, the information you enter is transmitted to and stored by Formspree, a third-party form-processing service, so that the Service Provider can read and respond to your feedback. This may include the message content you write and any contact details you choose to provide. This information is used only to review and respond to your feedback. Formspree processes this data under its own privacy policy, available at https://formspree.io/legal/privacy-policy. To request deletion of feedback you have submitted, contact the Service Provider at vilemmckael.dev@gmail.com.</p>

        <p>The Service Provider also operates a support form on the Dry Calculator website, which includes an email field so that the Service Provider can respond to your inquiry. Information submitted there is likewise processed by Formspree and used only to review and respond to your message.</p>

        <div className='sectionHeader'>Your Rights</div>

        <p>Because the Application collects no personal data through normal use, there is generally no personal data to access, correct, or delete. For any information you submitted through the feedback form, you may request access to or deletion of it by contacting vilemmckael.dev@gmail.com.</p>

        <div className='sectionHeader'>California Privacy Rights (CCPA/CPRA)</div>

        <p>The Service Provider does not sell or share personal information, and does not use personal information for cross-context behavioral advertising. California residents may contact vilemmckael.dev@gmail.com with any questions about personal information.</p>

        <div className='sectionHeader'>European Users (GDPR)</div>

        <p>For users in the European Economic Area, the United Kingdom, and Switzerland: the Application does not collect personal data through normal use. Where you submit feedback through the in-app form, the legal basis for processing that information is your consent, which you may withdraw at any time by requesting deletion. You have the right to access, correct, or delete personal data you have submitted, and to lodge a complaint with your local data protection authority. To exercise any of these rights, contact the Service Provider at vilemmckael.dev@gmail.com.</p>

        <div className='sectionHeader'>Children</div>

        <p>The Application is not directed to children under 13 and does not knowingly collect personal information from children. If you believe a child has submitted personal information through the feedback form, contact the Service Provider at vilemmckael.dev@gmail.com so it can be deleted.</p>

        <div className='sectionHeader'>Security</div>

        <p>The Service Provider takes reasonable measures to protect any information it receives. However, no method of transmission or storage is completely secure.</p>

        <div className='sectionHeader'>Changes</div>

        <p>The Service Provider may update this Privacy Policy from time to time. Material changes will be posted here with an updated effective date. If future versions of the Application add features that collect personal data (such as account sign-in), this policy will be updated to describe them before or when those features are released.</p>

        <div className='sectionHeader'>Effective Date</div>

        <p>This privacy policy is effective as of 2026-07-07.</p>

        <div className='sectionHeader'>Contact</div>

        <p>For any questions about this Privacy Policy, contact the Service Provider at vilemmckael.dev@gmail.com.</p>
      </div>
    </div>
  )
}
