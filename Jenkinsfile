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
        
       
    }
}
