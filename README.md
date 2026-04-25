# Getting Started with Create React App
<br>
Author: Soubhik Samanta

<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Available Scripts

In the project directory, you can run:

### `npm start`


### `npm test`



### `npm run build`



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

### Analyzing the Bundle Size

### Making a Progressive Web App

### Advanced Configuration

### Deployment

### `npm run build` fails to minify


---

## 🚀 DevOps Pipeline Status

| Step | Status | Details |
|------|--------|---------|
| 1. Dockerfile + nginx.conf | ✅ | Multi-stage build, optimized |
| 2. docker-compose.yml | ✅ | Local orchestration |
| 3. Minikube Kubernetes | ✅ | 3-node cluster running |
| 4. K8s Manifests | ✅ | Deployment, Service, Ingress, HPA |
| 5. GitHub Actions CI/CD | ✅ | Auto build & test on push |
| 6. Deploy Script | ✅ | Zero-downtime rolling updates |

### Access Your Portfolio

**Local Minikube**:
```bash
kubectl port-forward -n portfolio svc/portfolio-service 8080:80
# Visit: http://localhost:8080
```

**Kubernetes Dashboard**:
```bash
minikube dashboard
```

### Deploy Latest Version

```bash
./deploy-local.sh
# or with specific tag:
./deploy-local.sh abc1234
```
