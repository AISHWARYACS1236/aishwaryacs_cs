const info = {
    main: {
        name: "AISHWARYA C S",
        description: "An AWS Cloud Engineer designs, deploys, and manages scalable cloud infrastructure on Amazon Web Services (AWS), automates processes using tools like Terraform and CloudFormation, ensures security and high availability, and optimizes performance for cost-efficient, reliable cloud solution",
        role: "CLOUD ENGINEER",
        photo: "../Dp.jpg",
        email: "aishwaryacs70@gmail.com",
        tracking_id: "G-BNTTBGHXSC"
    },
    resume: {
        link: "../aishwarya.pdf" // Replace with your actual resume URL
      },
    

    socials: {
		github: "https://github.com/AISHWARYACS1236",
		linkedin: "https://www.linkedin.com/in/aishwarya-c-s-80a1b9269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		instagram: "https://www.instagram.com/aishwarya_c_s05?igsh=anN2dzVlbW5qMW9n",

    },
    experience: [
        {
            company: "AWS-Forage",
            role: "Solutions Architecture Job Simulation intern",
            description: "Designed scable cloud architecture using AWS services gained knowledge  of cloud and networking and solution design.",
            period: "March- April"
        },
                        
        // More experiences...
    ],

    skills: {
    languages: {
        description: "I possess proficient expertise in a diverse range of programming languages, including Python, SQL.",
        image: "https://skillicons.dev/icons?i=py,mysql&perline=6&theme="
    },
    cloud: {
        description: "Experienced in Cloud and DevOps technologies, including AWS, Docker, Kubernetes, Jenkins, and Terraform for building, deploying, and managing scalable infrastructure.",
        image: "https://skillicons.dev/icons?i=aws,docker,kubernetes,jenkins,terraform&perline=6&theme="
    },
    tools: {
        description: "Skilled in using tools that enhance cloud automation, CI/CD, and monitoring — such as Git, Linux, VSCode, Bash, and GitHub Actions.",
        image: "https://skillicons.dev/icons?i=git,vscode,bash,githubactions,linux&perline=6&theme="
    },
    // 👇 Add this line to prevent 'frameworks undefined' error
    frameworks: { description: "", image: "" }
},


    projects: [
        {
		    title: "Deploy-a-3-Tier-Architecture-on-AWS",
            description: "A scalable 3-Tier Web Application deployed on AWS using EC2, RDS, and Load Balancers. This project showcases my expertise in designing highly available, secure, and efficient cloud architectures using Infrastructure as Code (IaC) with Terraform. It automates the provisioning of AWS resources such as EC2 instances, VPC, Subnets, Security Groups, Elastic IP, S3 bucket, and CloudWatch alarms — perfect for real-world enterprise deployments.",
            technologies: "https://skillicons.dev/icons?i=aws,terraform,linux,git,python&perline=5&theme=",
            github: "https://github.com/AISHWARYACS1236/Deploy-a-3-Tier-Architecture-on-AWS.git"
            // link: "https://letterdigitshape-classification.netlify.app/"
		},
        {
            title: "Terraform AWS WebApp",
            description: "This project demonstrates Infrastructure as Code (IaC) by deploying a fully automated web application on AWS using Terraform. It provisions AWS services such as EC2, VPC, Subnets, Security Groups, S3, and CloudWatch, ensuring scalable and secure infrastructure. The project highlights automation, reusability, and efficient cloud resource management — ideal for enterprise-grade deployments.",
            technologies: "https://skillicons.dev/icons?i=terraform,aws,linux,git,githubactions&perline=5&theme=",
            github: "https://github.com/AISHWARYACS1236/terraform-aws-webapp.git"

        },

		

		// {
		// 	title: "Sudoku Solver",
		// 	description: "Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.",
		// 	technologies: "https://skillicons.dev/icons?i=react,tailwindcss,ts,0,0&perline=5&theme=",
		// 	// github: "https://github.com/dsbalico/sudoku-solver-using-simulated-annealing",
        //     // link: "https://sudoku-solver-sa.netlify.app/"
		// },

		
    ],

    education: [
        {
            school: "Kalpaturu institution of technolofy",
            degree: "B.Tech in Electronics and communication",
            year: "2022 - 2026",
           // image: "kitslogo.jpg"
        },
        // {
        //     school: "sri gowthami junior college ",
        //     degree: "INTERMEDIATE",
        //     year: "2019 - 2021",
        //     image: "sgjclogo.png"
        // },
    ],

    contact: {
        title: "Reach Out and Connect",
        description: "Thank you for your interest in connecting with me. I welcome your feedback, questions, and suggestions. If you have a specific inquiry or comment, please feel free to email me directly at bitrasrinivaspavan@gmail.com. I strive to respond to all messages within 24 hours, but please allow a bit more time during busy periods. Alternatively, if you prefer to connect on social media, you can find me using the links provided below.",
    },

    footer: "© 2026 Aishwarya c s. All Rights Reserved"
}

export default info