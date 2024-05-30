import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom'

const styles: Record<string, CSSProperties> = {
  mask: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    height: '100%',
    zIndex: 1000
  },
  modalWrap: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000
  },
  modal: {
    fontSize: 14,
    padding: 20,
    width: 520,
    height: 200,
    margin: '100px auto 0',
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    textAlign: 'center'
  },
  btnGroup: {
    padding: 10,
    textAlign: 'right'
  }
}

export const Modal = {
  dom: null, //被append的元素

  success({ title, content, onOk, onCancel }: any) {
    this.close()

    this.dom = document.createElement('div')

    // JSX代码
    const JSXdom = (
      <div>
        <div style={styles.mask} />
        <div style={styles.modalWrap}>
          <div style={styles.modal}>
            <h2>{title}</h2>
            <p>{content}</p>
            <div style={styles.btnGroup}>
              <button onClick={() => this.onCancel(onCancel)}>取消</button>
              <button onClick={() => this.onOk(onOk)}>确定</button>
            </div>
          </div>
        </div>
      </div>
    )

    ReactDOM.render(JSXdom, this.dom)
    document.body.appendChild(this.dom)
  },

  onCancel(onCancel: any) {
    onCancel instanceof Function && onCancel()
    this.close()
  },

  onOk(onOk: any) {
    onOk instanceof Function && onOk()
    this.close()
  },

  close() {
    this.dom && this.dom.remove()
  }
}
