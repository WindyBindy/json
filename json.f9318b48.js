let t=document.querySelector("#bookmarkInput"),e=document.querySelector("#addBookmarkBtn"),a=document.querySelector("#bookmarkList"),o=[];function l(t){a.innerHTML=t.map((t,e)=>`<li class="bookmark" data-idx="${e}">
	<a href="https://${t}" target="_blank">${t}</a>
		<button type="button" class="delete">delete</button>
</li>`).join("")}e.addEventListener("click",()=>{let e=t.value.trim();e&&(o.push(e),t.value="",l(o))}),a.addEventListener("click",t=>{if(t.target.classList.contains("delete")){let e=t.target.closest(".bookmark").dataset.idx;o.splice(e,1),l(o)}});
//# sourceMappingURL=json.f9318b48.js.map
