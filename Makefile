# /Users/shuto.komuro/Private/sample-grpc/node_modules/.bin
# カレントプロジェクトのローカルパッケージPATHを返す
NPM_BIN=$(shell npm bin)
OUT_DIR="./gen"

# tool path
NODE_PROTOC="$(NPM_BIN)/grpc_tools_node_protoc"
NODE_PROTOC_PLUGIN="$(NPM_BIN)/grpc_tools_node_protoc_plugin"
PROTOC_GEN_TS="$(NPM_BIN)/protoc-gen-ts"

# --plugin: 生成される.jsファイルに対応する型定義ファイル(.d.ts)を生成
# --js_out, --grpc_out, --ts_out: モデル定義、gRPCのコード(クライアント、サーバの雛形)、双方の型定義ファイルの出力先
# 最後に -I ../ ../proto/*.proto でコンパイルする.protoファイルを指定
.PHONY: gen
gen:
	rm -rf $(OUT_DIR) && mkdir -p $(OUT_DIR)
	$(NODE_PROTOC) \
	--plugin="protoc-gen-ts=$(PROTOC_GEN_TS)" \
	--js_out="import_style=commonjs,binary:$(OUT_DIR)" \
	--grpc_out="grpc_js:$(OUT_DIR)" \
	--ts_out="service=grpc-node,mode=grpc-js:$(OUT_DIR)" \
	-I ./ \
	./proto/*.proto