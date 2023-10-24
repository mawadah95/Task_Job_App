import { Component } from '@angular/core';

export interface Job {
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs: Job[] = [
    {
      title: 'Engineering',
      description: 'To identify training and employment opportunities for young Omanis, beyond the oil & gas sector beyond the oil & gas sector ',
      image: 'pdo3.jpg'
    },
    {
      title: 'Network Operator',
      description: 'We are looking for individuals with an entrepreneurial mindset who get excited by challenges and constant change.',
      image: 'voda.png'
    },

    {
      title: 'Senior Infrastructure Specialist',
      description: 'nstalls, configures and maintains approved system hardware and software components nstalls, configures and maintains.',
      image: 'datap.jpg'
    },
    {
      title: 'Senior SAP Consultant',
      description: 'We understand the challenges and highs of trying to maintain multiple teams in multiple technology/product areas       .',
      image: 'glob.jpg'
    },
    {
      title: 'Service Desk Analyst',
      description: 'The Service Desk analyst will serve as the front line for the firm and will assist the organization in managing processes for Incident.',
      image: 'insight.jpg'
    },
    {
      title: 'Senior Infrastructure Specialist',
      description: 'installs, configures and maintains approved system hardware and software components.installs, configures and maintains approved system ',
      image: 'datap.jpg'
    },
    // Add more job objects as needed
  ];

  

  applyForJob(jobTitle: string) {
    // Implement your logic for applying to the job here
    console.log(`Applied for job: ${jobTitle}`);
    alert('Successfully applied for ' + jobTitle + '!');
  
  }

  
}
