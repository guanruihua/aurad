
import React, { useContext, createContext } from 'react';

type Store = {
	[key: string]: any;
};

type Stores = {
	[key: string]: Store;
};

// 创建一个React Context
const StoreContext = createContext<Stores>({});

// 定义一个HOC，接受一个store名称作为参数，并返回一个新的组件
const inject = <P extends Store>(storeName: keyof Stores) => (
	WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
	return (props: P) => {
		// 使用React Context获取对应store
		const store = useContext(StoreContext)[storeName];
		return <WrappedComponent {...props} {...store} />;
	};
};

// 定义一个Provider组件，用于将store注入到React Context中
type ProviderProps = {
	stores: Stores;
};

const Provider: React.FC<ProviderProps> = ({ stores, children }: any) => {
	// 将所有store注入到React Context中
	const storeValues = Object.keys(stores).reduce((obj, key) => {
		obj[key] = stores[key];
		return obj;
	}, {} as Stores);
	return (
		<StoreContext.Provider value={storeValues}>
			{children}
		</StoreContext.Provider>
	);
};

export { inject, Provider };