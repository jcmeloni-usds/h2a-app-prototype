import Introduction from '../components/Introduction.jsx';
import fullName from '../definitions/fullName';
import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';



const formConfig = {
  title: 'H-2A Visa Program',
  subTitle: 'Consolidated Application Prototype',
  formId: 'OMBxxxx',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {
    // stuff from lib
  },


//TODO - do validations that kick error messages
//TODO - align types with built-in widgets
//TODO - use lib where appropriate, e.g. fullname, address
//TODO - dedupe into definition files for easier use in the conditional paths
//TODO - tests! hahahahahhahaha


  chapters: {
    aboutPetition: {
      title: 'About this Petition',
      pages: {
        petitionInformation: {
          path: 'about-petition/petition-information',
          title: 'Petition Information',

          schema: {
            type: 'object',
            required: [
              'employerType',
              'employerNumber',
              'numberWorkersRequested',
              'workersNamed',
              'usingFLCorOther'
            ],
            properties: {
              employerType: {
                title: 'What type of employer is seeking workers?',
                type: 'string',
                default: 'Individual Employer',
                //TODO: Add the remaining options (they kick conditionals)
                enum: ['Individual Employer'],
                enumNames: ['Individual Employer']
              }, 
              employerNumber: {
                title: 'How Many Employers are There?',
                type: 'integer',
                default: 1
                //TODO: Check if limit; use range if necessary
              },
              numberWorkersRequested: {
                title: 'Number of Workers Requested',
                type: 'integer',
                default: 1
                //TODO: Check if limit; use range if necessary
              }, 
              workersNamed: {
                title: 'Are the Workers Named?',
                type: 'string',
                default: 'No',
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },     
              usingFLCorOther: {
                title: 'Is the employer using a Farm Labor Contractor (FLC), placement service, or other agent to recruit, supervise, transport, house, and/or pay for these workers?',
                type: 'string',
                default: 'No',
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
            }
          },

          uiSchema: {
            employerType: {
              'ui:title': 'What type of employer is seeking workers?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'select',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select the type of employer.'
              },
            }, 
            employerNumber: {
              'ui:title': 'How Many Employers are There?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'updown', //TODO: check that type is handled in review stage
              'ui:validations': '',  //TODO
              'ui:errorMessages': {
                 pattern: 'Please select the number of employers on this petition.'
              },
            }, 
            numberWorkersRequested: {
              'ui:title': 'Number of Workers Requested',
              'ui:description': '[Helper text here]',
              'ui:widget': 'updown',  //TODO: check that type is handled in review stage
              'ui:validations': '',   //TODO
              'ui:errorMessages': {
                 pattern: 'Please enter the number of workers you are requesting.'
              },
            }, 
            workersNamed: {
              'ui:title': 'Are the Workers Named?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please indicate if your petition includes named workers.'
              },
             },     
            usingFLCorOther: {
              'ui:title': 'Is the employer using a Farm Labor Contractor (FLC), placement service, or other agent to recruit, supervise, transport, house, and/or pay for these workers?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please indicate if you are using a Farm Labor Contractor (FLC), placement service, or other agent to recruit, supervise, transport, house, and/or pay for these workers.'
              }     
            }                 
          }
        },

        confirmVisaType: {
          path: 'about-petition/confirm-visa-type',
          title: 'Confirm Visa Type',

          schema: {
            type: 'object',
            required: [
              'confirmH2A',
              'basisForVisaClassification',
              'requestedAction'
            ],
            properties: {
              confirmH2A: {
                title: 'Are you seeking Temporary Agricultural Worker Visas (H-2A Visas) for these workers?',
                type: 'string',
                default: 'Yes',
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },  
              basisForVisaClassification: {
                title: 'What is the basis for the visa classification supported by this application?',
                type: 'string',
                default: 'New Employment',
                //TODO: Add the remaining options (they kick conditionals)
                enum: ['New Employment'],
                enumNames: ['New Employment']
              },  
              requestedAction: {
                title: 'What action are you requesting in this petition?',
                type: 'string',
                default: 'Notify the office in Part 4, so that each beneficiary can obtain a visa.',
                //TODO: Add the remaining options (they kick conditionals)
                enum: ['Notify the office in Part 4, so that each beneficiary can obtain a visa.'],
                enumNames: ['Notify the office in Part 4, so that each beneficiary can obtain a visa.']
          
              }
            }
          },

          uiSchema: {
            confirmH2A: {
              'ui:title': 'Are you seeking Temporary Agricultural Worker Visas (H-2A Visas) for these workers?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please indicate if you are seeking Temporary Agricultural Worker Visas (H-2A Visas) for these workers.'
              }             
            },
            basisForVisaClassification: {
              'ui:title': 'What is the basis for the visa classification supported by this application?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'select',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select the basis for the visa classification supported by this application.'
              },
            }, 
            requestedAction: {
              'ui:title': 'What action are you requesting in this petition?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select the action you are requesting in this petition.'
              },
            }                          
          }
        }
      }
    },








    aboutPetitioner: {
      title: 'About Yourself',
      pages: {
        firstPage: {
          path: 'about-petitioner/first-page',
          title: 'First Page',
          uiSchema: {
            //fullName: fullNameUI
          },
          schema: {
            type: 'object',
            properties: {
              //fullName
            }
          }
        },
        secondPage: {
          path: 'about-petitioner/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },



    aboutBusiness: {
      title: 'About the Business',
      pages: {
        firstPage: {
          path: 'about-business/first-page',
          title: 'First Page',
          uiSchema: {
            //fullName: fullNameUI
          },
          schema: {
            type: 'object',
            properties: {
              //fullName
            }
          }
        },
        secondPage: {
          path: 'about-business-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },

/*
Tell us about Yourself  

SELECT  What is your relationship to the employer?
  Attorney
  Employee / Owner
  Agent - Non-attorney Preparer

TEXT  What is your Job Title?

What is your Name?  
  
TEXT  Last (family) name
TEXT  First (given) name
TEXT  Middle name(s)

What is your Business Address?  
TEXT  Address 1
TEXT  Address 2
TEXT  City
SELECT  State
TEXT  Postal code
SELECT  Country
TEXT  Province

What is your Business Contact Information?  
TEXT  Daytime Telephone Number
TEXT  Extension
TEXT  Mobile Telephone Number
EMAIL E-Mail address


Contact Information 
TEXT  Legal Business Name
TEXT  Trade name/Doing Business As (DBA), if applicable
EXT Address 1
TEXT  Address 2
TEXT  City
SELECT  State
TEXT  Postal code
SELECT  Country
TEXT  Province 
TEXT  Telephone Number
TEXT  Telephone Extension
TEXT  Fax Number
EMAIL E-mail Address

Business Information  
TEXT  Federal Employer Identification Number (FEIN)
TEXT  NAICS Code 
TEXT  Total Number of non-family full-time equivalent employees
TEXT  Number of these employees in the United States
TEXT  Annual gross revenue
TEXT  Net Annual Income
TEXT  Year established

e-Verify Information  
RADIO If you are an H-2A petitioner, are you a participant in e-Verify?
TEXT  Provide E-verify Company ID or Client Company ID 

*/
    aboutJob: {
      title: 'About the Job',
      pages: {
        firstPage: {
          path: 'about-job/basic-information',
          title: 'First Page',
          uiSchema: {
            //fullName: fullNameUI
          },
          schema: {
            type: 'object',
            properties: {
              //fullName
            }
          }
        },





        secondPage: {
          path: 'about-job/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },

/*
About the Job 
 Job Title 
  SOC (ONET/OES) code
  SOC (ONET/OES) occupation title
  "A license is not required ... [choose this one] 
A license is required ... "
  Job description
[removed requirements from this section]
  Nature of Employment
  Nature of Temporary Need
  Statement of Temporary Need
  Does this position supervise the work of other employees?
  If yes, number of employees worker will supervise?


Job Requirements  
Check all requirements that apply:
  Job Requirements
[Section 16 from 790, 'minimum job requirements' reworded from 9142]
  Is training for the job opportunity required?
  Specify the number of
months of training required §
  Indicate the field(s)/name(s) of training required § (May list more than one related field and more than one type)
  Is employment experience required? *
  Specify the number of months of experience required §
  Indicate the occupation required §
  Special Requirements - List specific skills, licenses/certifications, and requirements of the job opportunity. 
  Is previous work experience preferred?
  Months Preferred 
  Education: minimum U.S. diploma/degree required
  If “Other degree” in question 1, specify the diploma/
degree required § 
   Indicate the major(s) and/or field(s) of study required §
(May list more than one related major and more than one field)
  Does the employer require a second U.S. diploma/degree?
  Indicate the second U.S. diploma/degree and the major(s) and/or field(s) of study required §

Hours and Schedule  Is this a full-time position?
  Anticipated Hours of Work per Week 
  Of this total, how many hours are overtime? 
  Anticipated range of hours for different seasonal activities
  Anticipated Start Date
  Anticipated End Date

Wage Information  Wage Rates, Special Pay Information and Deductions
[TABLE WITH INFORMATION]
  Basic Rate of Pay Offered * From: To (Optional):
  Overtime Rate of Pay (if applicable) § From: To (Optional):
  Per: (Choose only one) *  Hour  Week  Bi-Weekly  Month  Year  Piece Rate
  Piece Rate Information
  Additional Compensation Information (e.g., multiple worksite applications, itinerant work, or other special procedures)


Work Site Information Address where beneficiaries will work (Street / City / State / Zip)
  Will work be performed in multiple worksites within an area of intended
employment or at location(s) other than the address listed above? *
  Additional Address Fields
  Directions to Work Site
  Did you include an itinerary?
  Upload Itinerary
  Will the beneficiaries work for you off-site at another company or organization's location?
  Will the beneficiaries work exclusively in the Commonwealth of Northern Mariana Islands?
  List any strike, work stoppage, slowdown, or interruption of operation by the employees at the place where the workers will be employed. 

Worker Logistics: Housing, Meals, and Transportation  Address and Directions to Housing
  Description of Housing
  Describe how the employer intends to provide either 3 meals a day to each worker or furnish free and convenient cooking and kitchen facilities for workers to prepare meals
  Transportation Arrangements
  Are workers covered for Unemployment Insurance?
  Are workers covered by workers' compensation?
  Collect Calls Accepted from Employer


Fees and Agents Did H-2A workers pay any fees?
Full text is very long --->
  List the types and amounts of fees that the worker(s) paid or will pay. 
  Were the workers reimbursed?
  Have you made reasonable inquiries that agent isn't charging workers fees? Y/N
  Are tools, supplies, and equipment provided at no charge to the workers?
  If the workers agreed to pay a fee that they have not yet been paid, has their agreement been terminated before the workers paid the fee? (Submit evidence of termination or reimbursementw ith this petition) 
  Have you ever had an H2A or H2B petition denied or revoked because an employee paid a job placement fee or other similar compensation as a condition of the job offer or employment?
  When?
  Receipt Number
  Were the workers reimbursed for such fees and compensation? (Submit evidence of reimbursemen.). If you answered no because you were unable to locate the workers, include evidence of your efforts to locate the workers. 
  Have any of the workers you are requesting experienced an interrupted stay associated with their entry as an H2A or H2B? (See form for instructions) 
  Document the workers' period of stay in the table on the first page of this supplement. Submit evidence of each entry and each exit, with the peition, as evidence of the interrupted stays. 
  List any arrangements which have been made with establishment owners or agents for the payment of a commission or other benefits for sales made to workers.


String - Short 
Integer (6 digits)
String - Short
(Can we do a lookup?)
Checkbox
String - Paragraph
Array - Choose One
Array - Choose One
String - Paragraph
Radio - Y/N
Integer
Array - Choose Any
String - Paragraph
Radio - Y/N
Number
String - Short
Radio - Y/N
Number
String - Short
String - Paragraph
Radio - Y/N
Number
Array - Choose One
String - Short
String - Short
Button - Add Another
Radio - Y/N
String - Short
Button - Add Another
Radio - Y/N
Integer
Number
Text - Short
Date
Date
? Number - Money, String? 
Needs design
Number - Money 
Number - Money 
Array - Choose One
? Number - Money, String? 
String - Paragraph
String - Short
Integer
Radio - Y/N
String - Short
String - Paragraph
Radio - Y/N
Upload Feature
Radio - Y/N
Radio - Y/N
Checkbox ('none')
String - Paragraph

String - Short (address)
Number (address)
String - Paragraph (directions)
String - Paragraph
String - Paragraph
String - Paragraph
Radio - Y/N
Radio - Y/N
Radio - Y/N
Radio - Y/N
String - Short
Number - Money
Button - Add Another
Radio - Y/N
Radio - Y/N
Radio - Y/N
Radio - Y/N
Upload Feature
Radio - Y/N
Date
Integer
Radio - Y/N
Upload Feature
Radio - Y/N
Link to external page in instructions
String - Short
Date
Checkbox ('none')
String - Paragraph


*/

    aboutForeignWorkers: {
      title: 'About the Foreign Workers',
      pages: {
        foreignWorkers: {
          path: 'about-foreign-workers/foreign-workers-info',
          title: 'Foreign Worker Information',

          schema: {
            type: 'object',
            required: [
              'checkBeneficiaryInterest',
              'typeOfOffice',
              'officeAddressCity',
              'officeAddressStateOrCountry',
              'workerCountriesOfCitizenship',
              'passportCheck',
              'checkEntertainmentGroup',
              'checkAnyOtherPetitionsWithThisOne',
              'checkFilingForReplacementI94',
              'checkFilingForDependents',
              'checkBeneficiaryInRemovalProceedings',
              'checkFiledPreviouslyForBeneficiary',
              'checkFiledNonImmigrantPetitionForBeneficiary',
              'checkPreviousJ1OrJ2',
              'checkFilingForBenficiarySubjectToGuamCNMICapExemption',
              'mostRecentReceiptNumber'
            ],

            properties: {
              checkBeneficiaryInterest: {
                title: 'Does any beneficiary in this petition have ownership interest in the petitioning organization?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              }, 
              typeOfOffice: {
                title: 'Type of Office',
                type: 'string',
                default: "Consulate",
                enum: ['Consulate','Pre-flight Inspection','Port of Entry'],
                enumNames: ['Consulate','Pre-flight Inspection','Port of Entry']
              }, 
              officeAddressCity: {
                title: 'Office Address (City)',
                type: 'string'
              },
              officeAddressStateOrCountry: {
                title: 'Office Address (State or Foreign Country)',
                type: 'string'
                //TODO: Implement lookup of state or country definition
                //TODO: Add another
              }, 
              workerCountriesOfCitizenship: {
                title: 'List the countries of citizenship for the H-2A workers you plan to hire.',
                type: 'string'
                //TODO: Implement lookup from country definition of valid H2A countries
                //TODO: Add another
              },
              passportCheck: {
                title: 'Does each beneficiary have a passport?',
                type: 'string',
                default: "Yes",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              checkEntertainmentGroup: {
                title: 'Is this an entertainment group?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional (group name), but see if we even need to display this question
              },
              checkAnyOtherPetitionsWithThisOne: {
                title: 'Are you filing any other petitions with this one?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              checkFilingForReplacementI94: {
                title: 'Are you filing any apps for replacement I-94s?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              checkFilingForDependents: {
                title: 'Are you filing any apps for dependents with this petition?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },              
              checkBeneficiaryInRemovalProceedings: {
                title: 'Is any beneficiary in this petition in removal proceedings?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              checkFiledPreviouslyForBeneficiary: {
                title: 'Have you ever filed an immigrant petition for any beneficiary on this petition?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              checkFiledNonImmigrantPetitionForBeneficiary: {
                title: 'Have you ever previously filed a nonimmigrant petition for this beneficiary?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              checkPreviousJ1OrJ2: {
                title: 'Has any beneficiary been a J-1 or J-2?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },              
              checkFilingForBenficiarySubjectToGuamCNMICapExemption: {
                title: 'Are you filing this petition on behalf of a beneficiary subject to the Guam-CNMI cap exemption?',
                type: 'string',
                default: "No",
                enum: ['Yes','No'],
                enumNames: ['Yes','No']
                //TODO: Implement non-happy-path conditional
              },
              mostRecentReceiptNumber: {
                title: 'Provide the most recent petition / application receipt number for the beneficiary.',
                type: 'string'
                //TODO: Prob not a required field, or shown only as part of conditional
              }
            }
          },

          uiSchema: {
            checkBeneficiaryInterest: {
              'ui:title': 'Does any beneficiary in this petition have ownership interest in the petitioning organization?',
              'ui:description': '[Helper text here]',
              //'ui:description': 'If a beneficiary or beneficiaries named in Part 3 is/are outside of the United States, or a requested extension of stay or change of status cannot be granted, state the US Consulate or inspection facility you want notified if this petition is approved.
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please verify beneficiary interest in this petition.'
              },  
            }, 
            typeOfOffice: {
              'ui:title': 'What is the type of office',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select the type of office.'
              },
            }, 
            officeAddressCity: {
              'ui:title': 'What city is the office in?',
              'ui:description': '[Helper text here]',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please enter the city of the office.'
              }, 
            },
            officeAddressStateOrCountry: {
              'ui:title': 'What state or country is the office in?',
              'ui:description': '[Helper text here]',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please enter the state or country of the office.'
              }, 
            },
            workerCountriesOfCitizenship: {
              'ui:title': 'List the countries of citizenship for the H-2A workers you plan to hire',
              'ui:description': '[Helper text here]',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please enter the countries of citizenship for the H-2A workers you plan to hire.'
              }, 
            },
            passportCheck: {
              'ui:title': 'Does each beneficiary have a passport?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please verify the passport status of the beneficiaries.'
              }
            },
            checkEntertainmentGroup: {
              'ui:title': 'Is this an entertainment group?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if this is an entertainment group.'
              }
            },
            checkAnyOtherPetitionsWithThisOne: {
              'ui:title': 'Are you filing any other petitions with this one?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if you are filing any other petitions with this one.'
              }
            },
            checkFilingForReplacementI94: {
              'ui:title': 'Are you filing any apps for replacement I-94s?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if you are filing any apps for replacement I-94s.'
              }
            }, 
            checkFilingForDependents: {
              'ui:title': 'Are you filing any apps for dependents with this petition?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if you are filing any apps for dependents with this petition.'
              }
            },   
            checkBeneficiaryInRemovalProceedings: {
              'ui:title': 'Is any beneficiary in this petition in removal proceedings?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if any beneficiary in this petition is in removal proceedings.'
              }
            },  
            checkFiledPreviouslyForBeneficiary: {
              'ui:title': 'Have you ever filed an immigrant petition for any beneficiary on this petition?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if you have ever filed an immigrant petition for any beneficiary on this petition.'
              }
            },  
            checkFiledNonImmigrantPetitionForBeneficiary: {
              'ui:title': 'Have you ever previously filed a nonimmigrant petition for this beneficiary?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if you have ever previously filed a nonimmigrant petition for this beneficiary.'
              }
            },  
            checkPreviousJ1OrJ2: {
              'ui:title': 'Has any beneficiary been a J-1 or J-2?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if any beneficiary been a J-1 or J-2.'
              }
            },  
              checkFilingForBenficiarySubjectToGuamCNMICapExemption: {
              'ui:title': 'Are you filing this petition on behalf of a beneficiary subject to the Guam-CNMI cap exemption?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please select if you are filing this petition on behalf of a beneficiary subject to the Guam-CNMI cap exemption.'
              }
            },  
            mostRecentReceiptNumber: {
              'ui:title': 'Provide the most recent petition / application receipt number for the beneficiary.',
              'ui:description': '[Helper text here]',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please enter the most recent petition / application receipt number for the beneficiary.'
              }, 
            },                                            
          }
        },
      }
    },
    

    aboutUSWorkers: {
      title: 'About the American Workers',
      pages: {
        referrals: {
          path: 'about-us-workers/referrals',
          title: 'American Worker Referrals',

          schema: {
            type: 'object',
            required: [
              'referralInstructions'
            ],
            properties: {
              referralInstructions: {
                title: 'Explain how applicants are to be hired or referred, and the Employer\'s/Agent\'s available hour to interview workers.',
                type: 'string'
                //TODO: Determine if this can be something other than textarea, e.g. by adding specific questions.
              }
            }
          },

          uiSchema: {
            referralInstructions: {
              'ui:title': 'Explain how applicants are to be hired or referred, and the Employer\'s/Agent\'s available hour to interview workers.',
              'ui:description': '[Helper text here]',
              'ui:widget': 'textarea',
              'ui:validations': '', //TODO
              'ui:errorMessages': {
                 pattern: 'Please provide referral instructions for American workers.'
              }             
            }                          
          }
        }
      }
    }
  }
};

export default formConfig;
