pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'https://registry.hub.docker.com'
        DOCKER_IMAGE_NAME = 'my-node-app'
        imagename = "akhil2715/my-node-app"
        GIT_REPO_URL = 'https://github.com/NAkhilC/deployNgNode.git'
        dockerImage = ''
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: env.GIT_REPO_URL
            }
        }

         stage('first step ') {
            steps {
                script {
                    echo "first step done"
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                 dockerImage =  docker.build imagename
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    echo "Pushing the image to docker hub"
                    docker.withRegistry("", "DOCKER_SECRET") {
                       dockerImage.push("$BUILD_NUMBER")
                       dockerImage.push("latest")
                    }
                }
            }
        }
    }
}

