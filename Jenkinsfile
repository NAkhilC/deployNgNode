pipeline {
    agent any
    
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
                // Build Docker image
                script {
                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                // Log in to Docker registry using provided username and password
                script {
                    withCredentials([usernamePassword(credentialsId: '', usernameVariable: 'DOCKER_REGISTRY_USERNAME', passwordVariable: 'DOCKER_REGISTRY_PASSWORD')]) {
                        def dockerLoginCmd = "docker login -u ${env.DOCKER_REGISTRY_USERNAME} -p ${env.DOCKER_REGISTRY_PASSWORD} ${env.DOCKER_REGISTRY_URL}"
                        sh dockerLoginCmd
                        // Push Docker image to registry
                        sh "docker push ${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG}"
                    }
                }
            }
        }
    }
}
