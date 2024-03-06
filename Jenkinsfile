pipeline {
    agent {
        docker {
            // Specify the Docker image that contains Docker CLI
            image 'docker:latest'
            // Mount Docker socket so that Docker commands inside the container can interact with the Docker daemon
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    
    environment {
        DOCKER_REGISTRY_URL = 'https://hub.docker.com'
        DOCKER_IMAGE_NAME = 'my-node-app'
        DOCKER_IMAGE_TAG = 'latest'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from Git
                git 'https://github.com/NAkhilC/deployNgNode.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t angulardep/my-node-app .'
            }
        }
        
    }
}
