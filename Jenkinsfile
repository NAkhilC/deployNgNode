pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'https://registry.hub.docker.com'
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
                    docker.build("my-node-app/latest:${env.BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    echo "Pushing the image to docker hub"
                    def localImage = "my-node-app/latest:${env.BUILD_NUMBER}"
                    def repositoryName = "akhil2715/angulardep"
                    docker.withRegistry("", "DOCKER_SECRET") {
                       def image = docker.image("${repositoryName}");
                       image.push()
                    }
                }
            }
        }
    }
}

