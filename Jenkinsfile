pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('Checkout code') {
            steps {
                script {
                    checkout scm
                }
            }
        }
        // stage('Create deployment') {
        //     steps {
        //         script {
        //             echo "GitHub Token: ${GITHUB_TOKEN}"
        //             def deployment = sh(script: "curl -X POST -H 'Authorization: token \${GITHUB_TOKEN}' -d '{\"ref\": \"\${BRANCH_NAME}\", \"environment\": \"demo-\${BRANCH_NAME}\"}' https://api.github.com/repos/henriqueidt/poc-storybook-7/deployments", returnStatus: true)
        //             if (deployment != 201) {
        //                 error "Failed to create deployment"
        //             }
        //         }
        //     }
        // }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'rm -rf node_modules'
                    sh 'npm install'
                }
            }
        }
        stage('Build Storybook') {
            steps {
                script {
                    sh "STORYBOOK_BUILD_PATH=\${BRANCH_NAME} npm run build-storybook"
                }
            }
        }
        stage('Create version mark') {
            steps {
                script {
                    sh 'touch ./storybook-static/${GIT_COMMIT}.txt'
                }
            }
        }
        stage('Push to gh-pages') {
            steps {
                script {
                    sh 'git config --global user.email "henriqueidt@gmail.com"'
                    sh 'git config --global user.name "Henrique Eidt"'
                    sh 'git checkout -b gh-pages'
                    sh 'git add .'
                    sh 'git commit -m "Update gh-pages"'
                    sh 'git push origin gh-pages'
                }
            }
        }
        // stage('Update deployment status') {
        //     steps {
        //         script {
        //             def deploymentId = sh(script: "curl -s -H 'Authorization: token \${GITHUB_TOKEN}' https://api.github.com/repos/henriqueidt/poc-storybook-7/deployments | jq -r '.[] | select(.ref == \"\${BRANCH_NAME}\") | .id'", returnStdout: true).trim()
        //             def status = currentBuild.resultIsBetterOrEqualTo('FAILURE') ? 'failure' : 'success'
        //             sh script: "curl -X POST -H 'Authorization: token \${GITHUB_TOKEN}' -d '{\"state\": \"\${status}\"}' https://api.github.com/repos/henriqueidt/poc-storybook-7/deployments/\${deploymentId}/statuses", returnStatus: true
        //         }
        //     }
        // }
    }
     post{
          always{
               echo "pipeline concluded."
          }
          success{
               echo "all stages executed with success."
          }
     }
}