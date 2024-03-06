pipeline {
     agent {
        docker { image 'node:18-alpine' }
    }
    environment {
        DOCKER_REGISTRY_URL = 'https://hub.docker.com'
        DOCKER_IMAGE_NAME = 'my-node-app'
        DOCKER_IMAGE_TAG = 'latest'
    }
    
    
    stages { 
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
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
