pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY_URL = 'https://hub.docker.com'
        DOCKER_IMAGE_NAME = 'my-node-app'
        DOCKER_IMAGE_TAG = 'latest'
    }
    
    
    stages { 
        stage('Check Docker') {
            steps {
                sh 'docker --version'
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
