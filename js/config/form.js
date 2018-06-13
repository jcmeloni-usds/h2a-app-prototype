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


  chapters: {
    aboutPetition: {
      title: 'About this Petition',
      pages: {
        petitionInformation: {
          path: 'about-petition/petition-information',
          title: 'Petition Information',
          required: [
            'employerType',
            'employerNumber',
            'numberWorkersRequested',
            'workersNamed',
            'usingFLCorOther'
          ],

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
              'ui:validations': '',
              'ui:errorMessages': {
                 pattern: 'Please select the type of employer.'
              },
            }, 
            employerNumber: {
              'ui:title': 'How Many Employers are There?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'updown',
              'ui:validations': '',
              'ui:errorMessages': {
                 pattern: 'Please select the number of employers on this petition.'
              },
            }, 
            numberWorkersRequested: {
              'ui:title': 'Number of Workers Requested',
              'ui:description': '[Helper text here]',
              'ui:widget': 'updown',
              'ui:validations': '',
              'ui:errorMessages': {
                 pattern: 'Please enter the number of workers you are requesting.'
              },
            }, 
            workersNamed: {
              'ui:title': 'Are the Workers Named?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '',
              'ui:errorMessages': {
                 pattern: 'Please indicate if your petition includes named workers.'
              },
             },     
            usingFLCorOther: {
              'ui:title': 'Is the employer using a Farm Labor Contractor (FLC), placement service, or other agent to recruit, supervise, transport, house, and/or pay for these workers?',
              'ui:description': '[Helper text here]',
              'ui:widget': 'radio',
              'ui:validations': '',
              'ui:errorMessages': {
                 pattern: 'Please indicate if you are using a Farm Labor Contractor (FLC), placement service, or other agent to recruit, supervise, transport, house, and/or pay for these workers.'
              }     
            }                 
          }
        },



        secondPage: {
          path: 'about-petition/second-page',
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
Confirm Visa Type   

RADIO   Are you seeking Temporary Agricultural Worker Visas (H-2A Visas) for these workers?
SELECT  Basis for the visa classification supported by this application
SELECT  Requested Action

*/




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
    aboutJob: {
      title: 'About the Job',
      pages: {
        firstPage: {
          path: 'about-job/first-page',
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
    aboutForeignWorkers: {
      title: 'About the Foreign Workers',
      pages: {
        firstPage: {
          path: 'about-foreign-workers/first-page',
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
          path: 'about-foreign-workers/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    aboutUSWorkers: {
      title: 'About the American Workers',
      pages: {
        firstPage: {
          path: 'about-us-workers/first-page',
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
          path: 'about-us-workers/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    }
  }
};

export default formConfig;
