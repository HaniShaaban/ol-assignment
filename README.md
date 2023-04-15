```
1- clone the project
2- cd to ol-assignment
3- npm install
4- npm run dev
5- access the application by going to http://localhost:4000/
```
1- Get Phases
```
query Phases($status: PROGRESS_STATUS, $page: Int) {
  phases(status: $status, page: $page) {
    id
    name
    order
    status
    tasks {
      id
      name
      status
    }
  }
}
```
params:
```
{
  "status":  null
}
```

2- Get Tasks
```
query tasks($status: PROGRESS_STATUS, $page: Int) {
  tasks(status: $status, page: $page) {
    id
    name
    status
    phase {
      id
      name
      order
      status
    }
  }
}
```
params:
```
{
  "status": null
}
```

3- Create a Phase
```
mutation createPhase($input: CreatePhaseInput!) {
  createPhase(input: $input) {
    id
    name
    order
    status
  }
}
```
params:
```
{
  "input": {
    "name": "Newly added Phase",
  }
}
```

4- Create a Task
```
mutation createTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    name
    phase {
      name
    }
    status
  }
}
```
params:
```
{
  "input": {
    "name": "newly created task",
    "phase": "1"
  }
}
```

5- Finish Task
```
mutation finishTask($taskId: ID!) {
  finishTask(taskID: $taskId) {
    id
    name
    phase {
      name
    }
    status
  }
}
```
params:
```
{
  "taskId": "1"
}
```

6- Reopen Task
```
mutation ReopenTask($taskId: ID!) {
  reopenTask(taskID: $taskId) {
    id
    name
    phase {
      name
    }
    status
  }
}
```
params:
```
{
  "taskId": "1"
}
```
