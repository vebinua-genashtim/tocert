import { Scale } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const AssessmentRegulation = () => {
  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Assessment & Certification Regulation"
        subtitle="Our framework for maintaining the highest standards of certification integrity"
        icon={Scale}
        theme="regulation"
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-10 md:px-12 md:py-14">
              <div className="space-y-6">
                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">1. Client shall observe the guidance on the quality management system standard and its procedure, requirements and regulations relating certification.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">2. Client and TO-CERT shall cooperate on the below mentioned items for the smooth performance of the audit.</strong>
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">TO-CERT ensures to comply with the regulations related to certification system.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">For certification audit, surveillance audit, Client shall allow access to the necessary places, premises and documentation for auditing. Client shall also allow such as access equally for special audit or confirmation which may be conducted by the accreditation body. If Client does not allow these without good reason, its Certification can be suspended or withdrawn.</span>
                    </li>
                    <li className="flex items-start ml-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">In the case that certain specific data or other information related to legal or regulatory compliance are not made available to TO-CERT for review because of an assertion of legal privilege of proprietary nature, registration shall not be granted, unless Client can obtain demonstration by objective evidence that full system requirements relating to legal compliance have been effectively implemented by sufficiently documented and verifiable means.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Client shall regularly conduct compliance evaluation for regulation and requirements which organization agreed during initial, surveillance, and special audits, and these matters can be confirmed during conducting audits. In case the violation of laws or regulation exists before the audit, or TO-CERT becomes aware of any violation, TO-CERT can request a proper corrective action. In case if this corrective action is not properly applied, TO-CERT will not issue certificate, or TO-CERT may cancel or suspend certification if it is the period of surveillance audit or special audit. If TO-CERT becomes aware of any violation of laws and regulation, TO-CERT can request a proper corrective action and should confirm its result.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The person or organization that offered Client consultancy or training is not allowed to ask, answer and advise which can affect the audit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Whole process of Client which is applicable as applied audit scope should be in operation at the time of Stage 1 and Stage 2 audit of initial certification and re-certification audit. However, which is not applicable at surveillance.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">3. TO-CERT shall explain, where certification scope of Client relates to specific program, necessary aspects to Client.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">4. TO-CERT officially selects the audit team and shall provide auditors with proper materials towards audit scope to be audited. Audit plan shall be fixed with close cooperation with Client and scope of operation to be performed by audit team shall be clearly defined and informed to Client.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">5. In case Client has objection regarding selection of auditors, technical expert composed in audit team and method and procedure of audit, TO-CERT shall notify Client of the reason for audit team change or disapproval.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">6. TO-CERT shall not recommend the certification before all the nonconformities found against those from certification audit is closed out with proper corrective action from Client.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">7. Initial audit are divided into stage 1 audit and stage 2 audits to perform, in principle, the audit shall be performed at the site of Client. In the case of recertification, in case there are no major changes on Client, only stage 2 audit need to be carried out.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">8. In selection of audit team, TO-CERT may appoint and compose contracted auditors into audit team and shall take responsibility for audit resulted from the selection.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">9. The surveillance audit is to be carried out minimum once per year and the certification from TO-CERT can be suspended or withdrawn accordingly when the surveillance audit is not carried out within 6 months from the surveillance due for whatever reason(s).</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">10. Once agreed to appoint TO-CERT, Client shall pay the audit fee to TO-CERT, and if Client does not pay the costs without any particular reason for more than 3 months, TO-CERT can proceed to suspend/ withdraw certification.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">11. TO-CERT may carry out special audits, apart from the regular surveillance audit, if the need arises. Special surveillance is carried out for situations that arise from major complaint on Client's quality management system or as and when TO-CERT deemed required due to feedback from external agencies. TO-CERT shall document the outcome of its investigation.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">12. Client shall inform TO-CERT of changes details, if any on personnel or sites, within 30 days since its occurrence, and TO-CERT may adjust auditor days at the following surveillance or re-certification visit.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">13. Client shall record all the complaints and negative findings, towards maintenance of quality management system received from personnel involved and interested parties. And then accordingly result of corrective action shall be maintained, which shall be available for audit at surveillance visit.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800 mb-2">
                    <strong className="text-honey-600">14. Upon the certification approval, TO-CERT shall issue the certificate to the Client accordingly.</strong>
                  </p>
                  <p className="text-sm text-gray-600 italic ml-2">Note: The issued certificate shall remain as the property of TO-CERT</p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">15. Regardless of the magnitude of any damage(s) that may arise due to TO-CERT action(s), once validated, TO-CERT shall limit its professional indemnity to any client's claim to an amount equivalent to the initial assessment fee or one single annual surveillance fee. Subject to the client's concurrence, TO-CERT may opt to discontinue to provide certification service.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">16. In the usage of certificate and certification mark, Client shall abide by the 'Maintenance, Certificate and Logo Control' as set by TO-CERT. In the event that the certificate and certification logo are misused, TO-CERT can demand corrective actions from the Client. If the Client does not take the appropriate corrective actions, TO-CERT can suspend/ withdraw certification.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">17. For the additional issuance of certificate for special reasons, Client shall pay some additional fee.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">18. Validity of Client's certificate is 3 years from the issuance date except transfer audit, which recognizes the validity of certificate only for its remaining period. At TO-CERT's discretion, TO-CERT may decide to issue the certificate with less than 3 years validity for some cases.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">19. TO-CERT shall notify the Client 1 month before the certification expiration date. And Client shall apply for the recertification before its expiration date.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">20. Client may apply to TO-CERT for expansion to scope at any point of time. Expansion to scope shall apply to technical extensions, where the scope of certification is added to or modified to reflect an increase in capability, or geographical extensions, where another branch is being added to the certification. Upon receipt of the client's request for expansion to scope(s), TO-CERT shall undertake a review of the application and determine any audit activities necessary to decide whether or not the extension to be granted. In the event that TO-CERT decided that extension can be granted with audit activities, such extension audit may be conducted at a special visit or at the next surveillance. The client should note that additional mandays may be incurred at the next surveillance/recertification.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-3 text-gray-800">
                    <strong className="text-honey-600">21. When the client decides, or the auditor found that the scope of certification needs to be reduced, for example, the certified client no longer perform certain activities at a particular site or no longer perform a particular process, the auditor shall inform the client to submit a request to TO-CERT. TO-CERT shall decide if an unscheduled visit will be necessary, based on the following criteria:</strong>
                  </p>
                  <ul className="list-none space-y-2 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The reduced scope impacts on the remaining scope</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Reduced scope arising out of complaints</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">22. For any types of certification(s), TO-CERT reserve the right to grant or refuse approval.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">23. TO-CERT may suspend certification for the following situations:</strong>
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The client's certified quality management system has persistently or seriously failed to meet certification requirements, including requirements for the effectiveness of the quality management system.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The Client does not allow surveillance or recertification audit to be conducted.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The Client does not take response of action to revised standards.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The Client violates criteria in the use of certification mark at promotion.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The Client has voluntarily requested a suspension.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The suspension shall not exceed 6 months. Once exceeded 6 months, certification shall be withdrawn. If Client applies the certificate after cancellation, it shall be handled as a new assignment.</span>
                    </li>
                  </ul>
                  <p className="text-base leading-relaxed text-gray-700 mt-4 ml-2">
                    Upon TO-CERT's satisfactory review of the action(s) taken on those issue(s) raised (that had resulted in the suspension) have been resolved, TO-CERT shall restore the suspension accordingly. TO-CERT reserve the rights to proceed to withdraw or reduce the scope of certification if the affected client(s) failed to resolve those issue(s) raised (that had resulted in the suspension) in the established time frame.
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">24. TO-CERT may withdraw certification of Client for the following situations:</strong>
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The Client voluntarily provides TO-CERT with notification of giving up certification.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">The certification is temporarily suspended more than 3 times within the valid period of certification.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Action is not taken or no reply is received one month after notification by TO-CERT intent to withdraw.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">It is deemed impossible to maintain certification due to bankruptcy or insolvency of Client.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Witness audit, requested, is refused without any valid reason(s).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Corrective action has not been taken despite corrective action was requested due to misuse of certificate/logo.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">25. Client shall use certification mark according to the requirements of TO-CERT. However, if suspending or withdrawing of certification is firmly confirmed or if this certification contract is terminated, Client shall be refrained from using certification mark in all the advertisement and promotion.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">26. Client shall notify, in writing to TO-CERT of any changes as follow within 30 days from its occurrence:</strong>
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Changes of certification scope and audit criteria which is derived from changes in ownership and the management and staff (key manager, decision- maker) or changes in facilities (transfer, acquisition, merger, reduction, extension, reorganization).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">In case validity of certification is to be suspended due to production line shut down or its employee's strike.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Major changes in operational process, facilities and technology which may affect the scope and standard of certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Major document changes to the quality management system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Sanctions imposed by relevant authority or non-compliance to the local law and regulation, in which the management system certified is interrelated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Changes related to address and operation sites.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">27. TO-CERT shall notify Client of the following changes, if any, including on standards of certification or related:</strong>
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Changes to certification scheme or quality management system standard that may affect the Client.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Any other important changes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Changes related to address and operation sites.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">28. TO-CERT shall not disclose confidential information to any third party, including materials and information about the Client which is obtained during certification audit without the prior-written- consent of Client. In case information is required by the law (from the different governmental agencies) or information relating to certification is requested by the accreditation body, such information shall be disclosed, and the Client shall be informed accordingly.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">29. The Client is primarily responsible for conformity of quality management system even though the quality management system have been audited and certified by TO-CERT.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">30. Client may appeal against the certification decision by TO-CERT. TO-CERT shall convene an appeal committee, comprising independent personnel (not TO-CERT staff or members from the Assessment Committee) to review the appeal subject and shall notify Client of the result accordingly.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">31. When the dissatisfaction raised by Client is not properly settled or legal identification for the bilateral rights is requested the district court shall be that of Singapore's court and both parties shall abide by court's decision.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">32. When both Client and TO-CERT cannot reach a consensus on a particular appeal case, it shall be relegated to the following mediators:</strong>
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Disputes related to certification audit, affairs and services shall be relegated to the accreditation board by which Client is accredited.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Disputes over the audit fee related to contract shall observe the verdict reached by the district court of Singapore's court.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Disputes over mutual slandering through media can be resolved by the decision of media mediation or fair transaction committee.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base mb-4 text-gray-800">
                    <strong className="text-honey-600">33. In the event that the client makes a complaint against TO-CERT or TO-CERT receive complaint against any of TO-CERT's certified client, TO-CERT shall validate the complaint prior to investigation. In the case of complaint against TO-CERT's certified client, TO-CERT shall confirm if the complaint relates to the certification activities that it is responsible for. Once confirmed that the complaint is valid, TO-CERT shall proceed as follow:</strong>
                  </p>
                  <div className="ml-2 space-y-4">
                    <div>
                      <p className="font-semibold text-honey-600 mb-2">Client Complaint Against TO-CERT</p>
                      <div className="space-y-2 ml-4">
                        <p className="text-gray-700"><span className="font-medium">Step 1:</span> TO-CERT investigate the complaint.</p>
                        <p className="text-gray-700"><span className="font-medium">Step 2:</span> TO-CERT document the result of the findings and send to client</p>
                        <p className="text-gray-700"><span className="font-medium">Step 3:</span> Where it is confirmed that TO-CERT is at fault, TO-CERT shall remedy the issue(s), if required.</p>
                        <p className="text-gray-700"><span className="font-medium">Step 4:</span> TO-CERT shall review its internal procedures and amend if required, as part of correction and/or corrective action.</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-honey-600 mb-2">Complaint Against TO-CERT's Certified Client</p>
                      <div className="space-y-2 ml-4">
                        <p className="text-gray-700"><span className="font-medium">Step 1:</span> TO-CERT investigate the complaint.</p>
                        <p className="text-gray-700"><span className="font-medium">Step 2:</span> TO-CERT document the result of the findings and send to both the complainant and certified client.</p>
                        <p className="text-gray-700"><span className="font-medium">Step 3:</span> Where it is confirmed that TO-CERT's client is at fault, TO-CERT shall request correction and/or corrective action from the certified client. Where required, a special audit may be imposed.</p>
                        <p className="text-gray-700"><span className="font-medium">Step 4:</span> TO-CERT write to the complainant informing of the action(s) taken.</p>
                      </div>
                    </div>
                  </div>
                  <ul className="list-none space-y-3 ml-2 mt-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Without the written permission of the complainant, the information regarding the complainant and the subject of the complaint, inclusive of the complaint investigation process, shall be kept confidential.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">Regardless of the outcome of any complaint or appeal brought against TO-CERT by any certified client, or any investigation initiated by TO-CERT against any certified client, TO-CERT shall continue to serve the affected client(s) impartially and shall not discriminate these clients(s).</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-honey-500 pl-6 py-3 bg-honey-50/50 rounded-r-lg transition-all hover:bg-honey-100/50">
                  <p className="text-base leading-relaxed text-gray-800">
                    <strong className="text-honey-600">34. TO-CERT reserve the right to amend this Assessment & Certification Regulation when deemed necessary, without the need to notify the certificated client(s).</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentRegulation;
