---
type: stack
classes: ["static"]
section: stack
topbar: opaque
url: stack
title: Our stack
footer: white
description: Our stack
stack:
        -
                id: languages
                title: Languages we use
                items:
                        -
                                id: python
                                name: Python
                                desc: "We use the <strong>Python</strong> language for machine learning and data science"
                        -
                                id: golang
                                name: Go
                                desc: "We use the <strong>Go</strong> language for all of our backend applications"
                        -
                                id: javascript
                                name: JavaScript
                                desc: "We use the <strong>JavaScript</strong> language for all of our frontend applications"
        -
                id: storage
                title: We store our data on
                items:
                        -
                                id: mongodb
                                name: MongoDB
                                desc: ""
                        -       
                                id: elastic
                                name: Elastic Search
                                desc: ""
        -
                id: codehost
                title: We host our code on
                items:
                        -
                                id: github
                                name: GitHub
                                desc: ""
        -              
                id: deploy
                title: Our deploy pipeline
                items:
                        -
                                id: github
                                name: GitHub
                                desc: "We create a tag on <strong>GitHub</strong> to release a new version"
                        -
                                id: drone
                                name: Drone CI
                                desc: "<strong>DroneCI</strong> passes the tests and builds the docker image"
                        -
                                id: quay
                                name: "quay.io"
                                desc: "Generated docker image is uploaded to <strong>quay.io</strong>"
                        -
                                id: kubernetes
                                name: Kubernetes
                                desc: "New version is deployed using <strong>kubernetes</strong>"
        -
                id: infra
                title: "Our infrastructure works with"
                items:
                        -
                                id: gcp
                                name: "Google Cloud Platform"
                                desc: ""
                        -       
                                id: docker
                                name: "Docker"
                                desc: ""
                        -
                                id: coreos
                                name: "CoreOS"
                                desc: ""
                        -
                                id: etcd
                                name: "etcd"
                                desc: ""
        -         
                id: frontend
                title: "Frontend tools"
                items:
                        -
                                id: react
                                name: "React.js"
                                desc: ""
                        -
                                id: redux
                                name: "Redux"
                                desc: ""
                        -
                                id: webpack
                                name: "Webpack"
                                desc: ""
                        -        
                                id: mocha
                                name: "Mocha"
                                desc: ""
        -
                id: ml
                title: "Machine learning tools"
                items:
                        -
                                id: jupyter
                                name: "Jupyter"
                                desc: ""
                        -
                                id: tensorflow
                                name: Tensorflow
                                desc: ""
                        -
                                id: spark
                                name: Apache Spark
                                desc: ""
---

Content goes here