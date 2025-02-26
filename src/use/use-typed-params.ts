import { useParams } from "react-router";

type TypedParams = 'blogName' | 'caseName';

export const useTypedParams = () => {
	return useParams<Record<TypedParams, string>>();
}