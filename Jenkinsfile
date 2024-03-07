pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'https://hub.docker.com/'
        DOCKER_IMAGE_NAME = 'my-node-app'
        GIT_REPO_URL = 'https://github.com/NAkhilC/deployNgNode.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: env.GIT_REPO_URL
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://your-docker-registry-url', 'DOCKER_SECRET') {
                        docker.image("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }
    }
}
