import { BinaryTree } from "./BinaryTree.mjs";

export class BinarySearchTree {
  constructor(rootNode = null) {
    this.root = rootNode;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new BinaryTree(data);
      return;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode !== null) {
      parentNode = currentNode;

      if (currentNode.getData() === data) {
        return;
      } else if (currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    const newNode = new BinaryTree(data);
    if (parentNode.getData() > data) {
      parentNode.setLeftSubTree(newNode);
    } else {
      parentNode.setRightSubTree(newNode);
    }
  }

  search(targetData) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.getData() === targetData) {
        return currentNode;
      } else if (currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    return null;
  }

  remove(targetData) {
    const fakeParentRootNode = new BinaryTree(0);
    fakeParentRootNode.setRightSubTree(this.root);
    let parentNode = fakeParentRootNode;
    let currentNode = this.root;
    let deletingNode = null;

    // 삭제할 노드 위치
    while (currentNode !== null && currentNode.getData() !== targetData) {
      parentNode = currentNode;
      if (currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    if (currentNode === null) return;

    // 노드 삭제
    deletingNode = currentNode;

    if (deletingNode.getLeftSubTree() === null && deletingNode.getRightSubTree() === null) {
      // 삭제할 노드의 자식 노드 없는 경우

      // 삭제할 노드를 찾아서 제거
      if (parentNode.getLeftSubTree() === deletingNode) {
        parentNode.removeLeftSubTree();
      } else {
        parentNode.removeRightSubTree();
      }
    } else if (deletingNode.getLeftSubTree() === null || deletingNode.getRightSubTree() === null) {
      // 삭제할 노드의 자식 노드 1개
      let deletingNodeChild;

      // 삭제할 노드의 자식 노드 저장
      if (deletingNode.getLeftSubTree() !== null) {
        deletingNodeChild = deletingNode.getLeftSubTree();
      } else {
        deletingNodeChild = deletingNode.getRightSubTree();
      }

      // 삭제할 노드를 찾아서 삭제할 노드의 자식 노드와 연결
      if (parentNode.getLeftSubTree() === deletingNode) {
        parentNode.setLeftSubTree(deletingNodeChild);
      } else {
        parentNode.setRightSubTree(deletingNodeChild);
      }
    } else {
      // 자식 노드 2개
      // 삭제 노드를 대체할 노드
      let replacingNode = deletingNode.getLeftSubTree();
      let replacingNodeParent = deletingNode;

      // 삭제 노드를 대체할 노드 탐색 (삭제할 노드의 자식들 중 가장 큰 수)
      while (replacingNode.getRightSubTree() !== null) {
        replacingNodeParent = replacingNode;
        replacingNode = replacingNode.getLeftSubTree();
      }

      // 삭제 노드 값 저장
      const deletingNodeData = deletingNode.getData();
      // 삭제 노드 값을 대체 노드 값으로 변경
      deletingNode.setData(replacingNode.getData());

      // 대체 노드 정리 - 대체 노드의 부모와 자식을 연결
      // 주의 : 제일 큰 값으로 마지막 오른쪽 값을 탐색하였으므로 연결해주는 데이터는 항상 왼족 노드가 된다.
      if (replacingNodeParent.getLeftSubTree() === replacingNode) {
        replacingNodeParent.setLeftSubTree(replacingNode.getLeftSubTree());
      } else {
        replacingNodeParent.setRightSubTree(replacingNode.getLeftSubTree());
      }

      // 삭제하려고한 노드를 대체된 노드로 변경해주고 이 값을 삭제하려고한 노드의 값으로 덮어씌우기
      // 이 값은 삭제된 노드의 값을 return하기 위함
      deletingNode = replacingNode;
      deletingNode.setData(deletingNodeData);
    }

    // 제거된 노드가 루트 노드인 경우 변경된 노드를 루트 노드로 설정
    if (fakeParentRootNode.getRightSubTree() !== this.root) {
      this.root = fakeParentRootNode.getRightSubTree();
    }

    return deletingNode;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

console.log("===== Seaerch 6 =====");
console.log(binarySearchTree.search(6));

console.log("===== Seaerch 1 =====");
console.log(binarySearchTree.search(1));

binarySearchTree.remove(10);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);
